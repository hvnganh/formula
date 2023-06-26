export {};

declare global {
    type TeamCardType = {
        rank: string;
        points: string;
        teamName: string;
        teamImg: string;
        drivers: Array<{
            firstName: string;
            lastName: string;
            imgDriver: string;
        }>
        carSlug: string;
    }

    type DriverCardType = {
        rank: string;
        points: string;
        firstName: string;
        lastName: string;
        nameSlug: string;
        team: string;
        flagImg: string;
        driverImg: string;
        numberImg: string;
    }

    type TeamDetailType = {
        teamDetail: {
            fullteamname: string;
            base: string;
            teamchief: string;
            technicalchief: string;
            chassis: string;
            powerunit: string;
            firstteamentry: string;
            worldchampionships: string;
            highestracefinish: string;
            polepositions: string;
            fastestlaps: string;
        };
        teamMember: Array<{
            avatar: string;
            number: string;
            name: string;
            team: string;
        }>;
        listParagraph: Array<string>;
    }

    type DriverDetailType = {
        driverImg: string;
        driverNumber: string;
        driverFullName: string;
        driverDetail: {
            team: string;
            country: string;
            podiums: string;
            points: string;
            grandsprixentered: string;
            worldchampionships: string;
            highestracefinish: string;
            highestgridposition: string;
            dateofbirth: string;
            placeofbirth: string;
        };
        listParagraph: Array<string>;
    }

    type ResultOfTheYearType = {
        grandprix: string;
        date: string;
        winner: string;
        car: string;
        laps: string;
        time: string;
        '':string;
    }
}
