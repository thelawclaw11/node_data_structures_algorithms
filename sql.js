function main() {
    const query = {
        types: "index,cds,indexqa,site-delivery",
        project_id: "PROJECT_ID",
    };
    return `
    SELECT
        COALESCE(SUM(pages), 0) pages,
        COALESCE(SUM(duration), 0) duration_milliseconds,
        IF(SUM(duration) > 0, SUM(pages)/(SUM(duration) / 1000.0 / 60.0 / 60.0), 0) pages_per_hour,
        type
        ${query.team || query.vendor ? ",operator" : ""}
        ${query.operator ? `,CREATE_TIME_SERIES(binned_time, pages) pages_per_bin` : ""}
      FROM (
        SELECT
          SUM(IF(measure_name='batch_page_count', measure_value::BIGINT, 0)) pages,
          SUM(IF(measure_name='duration', measure_value::BIGINT, 0)) duration,
          type
          ${
              query.operator
                  ? `,IF(CAST(timezone_offset AS INT) >= 0,
            DATE_TRUNC('${truncate}', time + PARSE_DURATION(CONCAT(timezone_offset,'m'))),
            DATE_TRUNC('${truncate}', time - PARSE_DURATION(CONCAT(REPLACE(timezone_offset, '-'),'m')))
          ) binned_time`
                  : ""
          }
          ${query.team || query.vendor ? ",operator" : ""}
        FROM stats.completion
        WHERE
         (measure_name='batch_page_count' OR measure_name='duration') AND status='success'
          AND type ${
              query.types
                  ? `IN (${query.types.split(",").map((type) => `'${type}'`)})`
                  : "!= 'site-delivery'"
          }
          ${query.operator ? `AND operator = '${query.operator}'` : ""}
          ${
              query.team === "*"
                  ? `AND team IS NOT NULL`
                  : query.team
                  ? `AND team = '${query.team}'`
                  : ""
          }
          ${query.vendor ? `AND vendor = '${query.vendor}'` : ""}
          ${query.project_id ? `AND project_id = '${query.project_id}'` : ""}
        GROUP BY
          type
       
          ${query.team || query.vendor ? ",operator" : ""}
      )
      GROUP BY
        type
        ${query.team || query.vendor ? ",operator" : ""}`;
}

console.log(main());
