import * as fs from "fs";
import { Page } from "@iarchives/page-dto/index";
import getTitleRanges from "./getTitleRanges";
import { Team } from "@iarchives/user-dto";
import { TitleInfo } from "../indexer/inputs/TitleCache";

const { inspect } = require("util");
function prettyPrint(x: any) {
    console.log(inspect(x, false, null, true));
}

type TitleRange = {
    title_id: Page["title_id"];
    startIndex: number;
    startName: string;
    endIndex?: number;
    endName?: string;
    info?: TitleInfo;
};

describe("getTitleRanges", () => {
    it("should get title ranges", () => {
        // const pages = [
        //     {
        //         raw_name: "0002",
        //         title_id: {
        //             pinned: true,
        //             last_changed_by: "erichardson",
        //             value: 32086,
        //             last_changed_by_group: "TEAM_2",
        //         },
        //         name: "0002",
        //         container_id: "9a7bdaff-e06c-47e2-8ef4-9780372e632b",
        //     },
        // ] as Page[];

        const pages: Page[] = JSON.parse(fs.readFileSync(__dirname + "/data.json", "utf-8"));
        const titleRanges = getTitleRanges(pages);

        const s = new Set();

        for (const page of pages) {
            // s.add(page?.title_id?.title_research?.catalog);
            //
            // s.add(page?.title_id?.value);
            // console.log(page.title_id);
        }

        // console.log(s);
        //
        prettyPrint(titleRanges);

        // expect(titleRanges).toEqual([
        //     {
        //         title_id: {
        //             pinned: true,
        //             last_changed_by: "erichardson",
        //             value: 32086,
        //             last_changed_by_group: "TEAM_2",
        //         },
        //         startIndex: 0,
        //         startName: "0002",
        //     },
        // ]);
    });
});
// sn90068375;
// sn90068379;
// sn90068380;
// sn90068381;
