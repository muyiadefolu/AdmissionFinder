var AdmissionFinder = window.AdmissionFinder || {};

(function (ns) {

    // ── Institutions ──────────────────────────────────────────────
    ns.institutions = [
        { id: "ui",       name: "University of Ibadan",                type: "Federal",      state: "Oyo",        established: 1948, accreditation: "Full", website: "https://www.ui.edu.ng", description: "Nigeria's premier university, consistently ranked among the best in Africa.", postUtme: { type: "CBT", fee: "₦2,000", minScore: 200, portal: "https://www.ui.edu.ng/admissions" } },
        { id: "unilag",   name: "University of Lagos",                type: "Federal",      state: "Lagos",      established: 1962, accreditation: "Full", website: "https://unilag.edu.ng", description: "A top-ranked federal university located in Nigeria's commercial capital.", postUtme: { type: "CBT", fee: "₦2,500", minScore: 200, portal: "https://unilag.edu.ng/admissions" } },
        { id: "oau",      name: "Obafemi Awolowo University",         type: "Federal",      state: "Osun",       established: 1961, accreditation: "Full", website: "https://www.oauife.edu.ng", description: "A prestigious federal university with a rich history of academic excellence.", postUtme: { type: "CBT", fee: "₦2,000", minScore: 200, portal: "https://www.oauife.edu.ng/admissions" } },
        { id: "abu",      name: "Ahmadu Bello University",            type: "Federal",      state: "Kaduna",     established: 1962, accreditation: "Full", website: "https://www.abu.edu.ng", description: "Nigeria's largest university by landmass, offering diverse programmes.", postUtme: { type: "CBT", fee: "₦2,000", minScore: 180, portal: "https://www.abu.edu.ng/admissions" } },
        { id: "unn",      name: "University of Nigeria, Nsukka",      type: "Federal",      state: "Enugu",      established: 1960, accreditation: "Full", website: "https://www.unn.edu.ng", description: "Nigeria's first indigenous university, modelled after the American land-grant system.", postUtme: { type: "CBT", fee: "₦2,000", minScore: 180, portal: "https://www.unn.edu.ng/admissions" } },
        { id: "lasu",     name: "Lagos State University",             type: "State",        state: "Lagos",      established: 1983, accreditation: "Full", website: "https://www.lasu.edu.ng", description: "A leading state university with multiple faculties and a growing research profile.", postUtme: { type: "CBT", fee: "₦2,000", minScore: 190, portal: "https://www.lasu.edu.ng/admissions" } },
        { id: "run",      name: "Rivers State University",            type: "State",        state: "Rivers",     established: 1972, accreditation: "Full", website: "https://www.rsu.edu.ng", description: "A state-owned university offering a wide range of undergraduate programmes.", postUtme: { type: "CBT", fee: "₦1,500", minScore: 180, portal: "https://www.rsu.edu.ng/admissions" } },
        { id: "eksu",     name: "Ekiti State University",             type: "State",        state: "Ekiti",      established: 1982, accreditation: "Full", website: "https://www.eksu.edu.ng", description: "A state university committed to accessible higher education in Ekiti State.", postUtme: { type: "CBT", fee: "₦1,500", minScore: 170, portal: "https://www.eksu.edu.ng/admissions" } },
        { id: "cu",       name: "Covenant University",               type: "Private",      state: "Ogun",       established: 2002, accreditation: "Full", website: "https://www.covenantuniversity.edu.ng", description: "A top-ranked private Christian university with a focus on leadership and innovation.", postUtme: { type: "CBT", fee: "₦3,000", minScore: 200, portal: "https://www.covenantuniversity.edu.ng/admissions" } },
        { id: "babcock",  name: "Babcock University",                 type: "Private",      state: "Ogun",       established: 1959, accreditation: "Full", website: "https://www.babcock.edu.ng", description: "Nigeria's oldest private university, offering a holistic education.", postUtme: { type: "CBT", fee: "₦2,500", minScore: 180, portal: "https://www.babcock.edu.ng/admissions" } },
        { id: "abuad",    name: "Afe Babalola University",            type: "Private",      state: "Ekiti",      established: 2009, accreditation: "Full", website: "https://www.abuad.edu.ng", description: "A fast-growing private university known for its modern facilities.", postUtme: { type: "CBT", fee: "₦2,000", minScore: 180, portal: "https://www.abuad.edu.ng/admissions" } },
        { id: "yabatech", name: "Yaba College of Technology",         type: "Polytechnic",  state: "Lagos",      established: 1947, accreditation: "Full", website: "https://www.yabatech.edu.ng/", description: "Nigeria's premier polytechnic, offering high-quality technical education.", postUtme: { type: "CBT", fee: "₦1,500", minScore: 160, portal: "https://www.yabatech.edu.ng/" } },
        { id: "funaab",   name: "Federal University of Agriculture",  type: "Federal",      state: "Ogun",       established: 1988, accreditation: "Full", website: "https://www.funaab.edu.ng", description: "A specialised federal university focused on agriculture and related sciences.", postUtme: { type: "CBT", fee: "₦2,000", minScore: 180, portal: "https://www.funaab.edu.ng/admissions" } },
        { id: "fedpoly",  name: "Federal Polytechnic, Nekede",        type: "Polytechnic",  state: "Imo",        established: 1977, accreditation: "Full", website: "https://www.fedpolynekede.edu.ng", description: "One of Nigeria's foremost polytechnics, offering a wide range of engineering and technical courses.", postUtme: { type: "CBT", fee: "₦1,000", minScore: 150, portal: "https://www.fedpolynekede.edu.ng/admissions" } },
        { id: "coeibadan",name: "Federal College of Education, Ibadan",type: "College of Education", state: "Oyo", established: 1976, accreditation: "Full", website: "https://www.fceibadan.edu.ng", description: "A leading college of education producing qualified teachers for Nigerian schools.", postUtme: { type: "CBT", fee: "₦1,000", minScore: 140, portal: "https://www.fceibadan.edu.ng/admissions" } },
        { id: "delstate", name: "Delta State University",             type: "State",        state: "Delta",      established: 1992, accreditation: "Full", website: "https://www.delstate.edu.ng", description: "A multi-campus state university offering diverse programmes.", postUtme: { type: "CBT", fee: "₦1,500", minScore: 170, portal: "https://www.delstate.edu.ng/admissions" } },
    ];

    // ── Courses ──────────────────────────────────────────────────
    ns.courses = [
        { id: "ee",       name: "Electrical Engineering",              duration: 5, degree: "B.Eng",     schoolType: "University" },
        { id: "cs",       name: "Computer Science",                    duration: 4, degree: "B.Sc",      schoolType: "University" },
        { id: "med",      name: "Medicine & Surgery",                 duration: 6, degree: "MBBS",      schoolType: "University" },
        { id: "law",      name: "Law",                                 duration: 5, degree: "LL.B",      schoolType: "University" },
        { id: "bus",      name: "Business Administration",             duration: 4, degree: "B.Sc",      schoolType: "University" },
        { id: "pharm",    name: "Pharmacy",                            duration: 5, degree: "Pharm.D",   schoolType: "University" },
        { id: "civ",      name: "Civil Engineering",                   duration: 5, degree: "B.Eng",     schoolType: "University" },
        { id: "mcb",      name: "Microbiology",                        duration: 4, degree: "B.Sc",      schoolType: "University" },
        { id: "acc",      name: "Accounting",                          duration: 4, degree: "B.Sc",      schoolType: "University" },
        { id: "mass",     name: "Mass Communication",                  duration: 4, degree: "B.Sc",      schoolType: "University" },
        { id: "hnd_ee",   name: "Electrical/Electronic Engineering",   duration: 2, degree: "HND",       schoolType: "Polytechnic" },
        { id: "hnd_cs",   name: "Computer Science",                   duration: 2, degree: "HND",       schoolType: "Polytechnic" },
        { id: "ned",      name: "Nursery & Primary Education",        duration: 3, degree: "NCE",       schoolType: "College of Education" },
        { id: "agri",     name: "Agricultural Science",                duration: 4, degree: "B.Sc",      schoolType: "University" },
    ];

    // ── Cut-off marks [institutionId][courseId] ──────────────────
    ns.cutoffs = {
        ui:       { ee: 230, cs: 240, med: 290, law: 270, bus: 220, pharm: 270, civ: 225, mcb: 210, acc: 225, mass: 215, agri: 200 },
        unilag:   { ee: 220, cs: 235, med: 285, law: 265, bus: 215, pharm: 265, civ: 215, mcb: 205, acc: 220, mass: 210, agri: 195 },
        oau:      { ee: 215, cs: 225, med: 280, law: 260, bus: 210, pharm: 260, civ: 210, mcb: 200, acc: 215, mass: 205, agri: 190 },
        abu:      { ee: 200, cs: 210, med: 270, law: 250, bus: 195, pharm: 255, civ: 200, mcb: 190, acc: 200, mass: 190, agri: 180 },
        unn:      { ee: 195, cs: 205, med: 270, law: 250, bus: 190, pharm: 250, civ: 195, mcb: 185, acc: 195, mass: 185, agri: 175 },
        lasu:     { ee: 200, cs: 210, med: 260, law: 245, bus: 195, pharm: 250, civ: 195, mcb: 185, acc: 195, mass: 185, agri: 180 },
        run:      { ee: 185, cs: 190, med: 250, law: 230, bus: 180, pharm: 240, civ: 180, mcb: 175, acc: 180, mass: 175, agri: 170 },
        eksu:     { ee: 180, cs: 185, med: 245, law: 225, bus: 175, pharm: 235, civ: 175, mcb: 170, acc: 175, mass: 170, agri: 165 },
        cu:       { ee: 210, cs: 220, med: 270, law: 250, bus: 200, pharm: 260, civ: 205, mcb: 195, acc: 205, mass: 195, agri: 190 },
        babcock:  { ee: 190, cs: 200, med: 260, law: 240, bus: 185, pharm: 250, civ: 185, mcb: 180, acc: 185, mass: 180, agri: 175 },
        abuad:    { ee: 195, cs: 205, med: 265, law: 245, bus: 190, pharm: 255, civ: 190, mcb: 185, acc: 190, mass: 185, agri: 180 },
        yabatech: { hnd_ee: 180, hnd_cs: 185 },
        funaab:   { ee: 190, cs: 200, agri: 180, mcb: 185, bus: 185 },
        fedpoly:  { hnd_ee: 160, hnd_cs: 165 },
        coeibadan:{ ned: 140 },
        delstate: { ee: 185, cs: 195, law: 230, bus: 180, acc: 185, mcb: 180, mass: 175 },
    };

    // ── O'level requirements [courseId] ──────────────────────────
    ns.olevelReqs = {
        ee:    { credits: ["Mathematics", "English", "Physics", "Chemistry"], plus: ["Biology or Tech Drawing"] },
        cs:    { credits: ["Mathematics", "English", "Physics"], plus: ["Chemistry, Biology or Economics"] },
        med:   { credits: ["Mathematics", "English", "Biology", "Physics", "Chemistry"] },
        law:   { credits: ["English", "Literature", "Government or History"], plus: ["Any two Arts or Social Science subjects"] },
        bus:   { credits: ["Mathematics", "English", "Economics"], plus: ["Any two of Commerce, Accounts, Govt, Geography"] },
        pharm:  { credits: ["Mathematics", "English", "Biology", "Physics", "Chemistry"] },
        civ:   { credits: ["Mathematics", "English", "Physics", "Chemistry"], plus: ["Biology or Geography"] },
        mcb:   { credits: ["Mathematics", "English", "Biology", "Chemistry"], plus: ["Physics or Geography"] },
        acc:   { credits: ["Mathematics", "English", "Economics"], plus: ["Any two of Commerce, Accounts, Govt"] },
        mass:  { credits: ["English", "Literature"], plus: ["Any three Arts or Social Science subjects"] },
        agri:  { credits: ["Mathematics", "English", "Chemistry", "Biology"], plus: ["Physics or Geography"] },
        hnd_ee: { credits: ["Mathematics", "English", "Physics", "Chemistry"], plus: ["Tech Drawing or Further Maths"] },
        hnd_cs: { credits: ["Mathematics", "English", "Physics"], plus: ["Chemistry or Economics"] },
        ned:   { credits: ["Mathematics", "English"], plus: ["Any three relevant subjects"] },
    };

    // ── JAMB subject combinations [courseId] ─────────────────────
    ns.jambSubjects = {
        ee:    { compulsory: ["Mathematics", "Physics", "Chemistry"], elective: "English (compulsory in all)" },
        cs:    { compulsory: ["Mathematics", "Physics"], elective: "Chemistry, Biology or Economics", note: "Some schools accept Biology as third subject" },
        med:   { compulsory: ["Biology", "Physics", "Chemistry"] },
        law:   { compulsory: ["English", "Literature", "Government or History"], elective: "Any Arts or Social Science subject" },
        bus:   { compulsory: ["Mathematics", "Economics"], elective: "Any of Commerce, Accounts, Govt, Geography" },
        pharm:  { compulsory: ["Biology", "Physics", "Chemistry"] },
        civ:   { compulsory: ["Mathematics", "Physics", "Chemistry"] },
        mcb:   { compulsory: ["Biology", "Chemistry"], elective: "Physics or Mathematics" },
        acc:   { compulsory: ["Mathematics", "Economics"], elective: "Any of Commerce, Accounts, Govt" },
        mass:  { compulsory: ["English", "Literature"], elective: "Any Arts or Social Science subject" },
        agri:  { compulsory: ["Biology", "Chemistry"], elective: "Physics or Geography" },
        hnd_ee: { compulsory: ["Mathematics", "Physics", "Chemistry"] },
        hnd_cs: { compulsory: ["Mathematics", "Physics"], elective: "Chemistry or Economics" },
        ned:   { compulsory: ["English"], elective: "Any three relevant subjects" },
    };

    // ── Career paths [courseId] ──────────────────────────────────
    ns.careers = {
        ee:    [{ title: "Electrical Engineer", demand: "High",   earnings: "₦2M–₦8M/yr", bodies: ["NSE", "COREN"] },
                { title: "Control Systems Engineer", demand: "Medium", earnings: "₦2.5M–₦7M/yr", bodies: ["NSE"] },
                { title: "Telecoms Engineer", demand: "High", earnings: "₦2M–₦6M/yr", bodies: ["NSE", "NITEL"] }],
        cs:    [{ title: "Software Developer", demand: "High",   earnings: "₦1.5M–₦6M/yr", bodies: ["NCS", "CPN"] },
                { title: "Data Scientist", demand: "High", earnings: "₦3M–₦10M/yr", bodies: ["NCS"] },
                { title: "IT Consultant", demand: "Medium", earnings: "₦2M–₦8M/yr", bodies: ["NCS", "CPN"] }],
        med:   [{ title: "Medical Doctor", demand: "High",   earnings: "₦3M–₦12M/yr", bodies: ["MDCN", "NMA"] },
                { title: "Surgeon", demand: "High", earnings: "₦5M–₦20M/yr", bodies: ["MDCN"] },
                { title: "Public Health Specialist", demand: "Medium", earnings: "₦2.5M–₦8M/yr", bodies: ["APHA"] }],
        law:   [{ title: "Legal Practitioner", demand: "High",   earnings: "₦2M–₦15M/yr", bodies: ["NLS", "NBA"] },
                { title: "Corporate Lawyer", demand: "High", earnings: "₦3M–₦12M/yr", bodies: ["NBA"] },
                { title: "Judge", demand: "Medium", earnings: "₦4M–₦10M/yr", bodies: ["NJC"] }],
        bus:   [{ title: "Business Manager", demand: "High",   earnings: "₦1.5M–₦5M/yr", bodies: ["CIPM", "NIM"] },
                { title: "Entrepreneur", demand: "Medium", earnings: "Variable", bodies: [] },
                { title: "Management Consultant", demand: "Medium", earnings: "₦3M–₦8M/yr", bodies: ["NIM"] }],
        pharm:  [{ title: "Pharmacist", demand: "High",   earnings: "₦2M–₦6M/yr", bodies: ["PCN", "NAPs"] },
                { title: "Pharmaceutical Researcher", demand: "Medium", earnings: "₦2.5M–₦7M/yr", bodies: ["PCN"] }],
        civ:   [{ title: "Civil Engineer", demand: "High",   earnings: "₦2M–₦7M/yr", bodies: ["NSE", "COREN"] },
                { title: "Structural Engineer", demand: "High", earnings: "₦2.5M–₦8M/yr", bodies: ["NSE"] }],
        mcb:   [{ title: "Microbiologist", demand: "Medium", earnings: "₦1.5M–₦4M/yr", bodies: ["NIM"] },
                { title: "Quality Control Analyst", demand: "Medium", earnings: "₦1.5M–₦5M/yr", bodies: [] }],
        acc:   [{ title: "Accountant", demand: "High",   earnings: "₦1.5M–₦5M/yr", bodies: ["ICAN", "ANAN"] },
                { title: "Auditor", demand: "Medium", earnings: "₦2M–₦6M/yr", bodies: ["ICAN"] }],
        mass:  [{ title: "Journalist", demand: "Medium", earnings: "₦1M–₦4M/yr", bodies: ["NUJ"] },
                { title: "Public Relations Officer", demand: "Medium", earnings: "₦1.5M–₦5M/yr", bodies: ["NIPR"] }],
        agri:  [{ title: "Agricultural Consultant", demand: "Medium", earnings: "₦1.5M–₦4M/yr", bodies: ["NIA"] },
                { title: "Farm Manager", demand: "Medium", earnings: "₦1.5M–₦3.5M/yr", bodies: [] }],
        hnd_ee: [{ title: "Electrical Technician", demand: "High", earnings: "₦1M–₦3M/yr", bodies: ["NSE"] },
                 { title: "Maintenance Engineer", demand: "Medium", earnings: "₦1.5M–₦4M/yr", bodies: [] }],
        hnd_cs: [{ title: "Web Developer", demand: "High", earnings: "₦1.5M–₦5M/yr", bodies: ["NCS"] },
                 { title: "IT Support Specialist", demand: "Medium", earnings: "₦1M–₦3M/yr", bodies: [] }],
        ned:   [{ title: "Primary School Teacher", demand: "High", earnings: "₦800K–₦2M/yr", bodies: ["TRCN"] },
                { title: "Education Administrator", demand: "Medium", earnings: "₦1M–₦3M/yr", bodies: ["TRCN"] }],
    };

    // ── Deadlines (mock) ─────────────────────────────────────────
    ns.deadlines = [
        { id: "d1", title: "JAMB Form Sales 2026/27", date: "2026-09-15", type: "jamb", icon: "event" },
        { id: "d2", title: "UI Post-UTME Registration", date: "2026-10-01", type: "postutme", icon: "school", institution: "ui" },
        { id: "d3", title: "UNILAG Post-UTME Registration", date: "2026-10-05", type: "postutme", icon: "school", institution: "unilag" },
        { id: "d4", title: "OAU Post-UTME Registration", date: "2026-10-10", type: "postutme", icon: "school", institution: "oau" },
        { id: "d5", title: "ABU Post-UTME Registration", date: "2026-10-15", type: "postutme", icon: "school", institution: "abu" },
        { id: "d6", title: "JAMB Change of Institution", date: "2026-11-01", type: "jamb", icon: "swap_horiz" },
        { id: "d7", title: "First Choice Application Deadline", date: "2026-12-15", type: "general", icon: "calendar_month" },
        { id: "d8", title: "Covenant University Post-UTME", date: "2026-10-08", type: "postutme", icon: "school", institution: "cu" },
    ];

    // ── Helpers ──────────────────────────────────────────────────
    ns.getInstitution = function (id) {
        return ns.institutions.find(function (i) { return i.id === id; });
    };

    ns.getCourse = function (id) {
        return ns.courses.find(function (c) { return c.id === id; });
    };

    ns.getCutoff = function (instId, courseId) {
        var inst = ns.cutoffs[instId];
        return inst ? inst[courseId] : undefined;
    };

    ns.getInstitutionsByCourse = function (courseId) {
        var results = [];
        ns.institutions.forEach(function (inst) {
            var cutoff = ns.getCutoff(inst.id, courseId);
            if (cutoff !== undefined) {
                results.push({ institution: inst, cutoff: cutoff });
            }
        });
        return results.sort(function (a, b) { return a.cutoff - b.cutoff; });
    };

    ns.recommend = function (score, olevelCredits) {
        var results = [];
        ns.institutions.forEach(function (inst) {
            ns.courses.forEach(function (course) {
                var cutoff = ns.getCutoff(inst.id, course.id);
                if (cutoff === undefined) return;

                var meetsOlevel = true;
                var req = ns.olevelReqs[course.id];
                if (req && olevelCredits) {
                    req.credits.forEach(function (subj) {
                        var found = false;
                        olevelCredits.forEach(function (c) {
                            if (c.toLowerCase().indexOf(subj.toLowerCase()) >= 0) found = true;
                        });
                        if (!found) meetsOlevel = false;
                    });
                }

                var status;
                var diff = score - cutoff;
                if (diff >= 10) { status = "Strong Match"; }
                else if (diff >= 0) { status = "Borderline"; }
                else if (diff >= -10) { status = "Below Cut-off (Close)"; }
                else { status = "Below Cut-off"; }

                results.push({
                    institution: inst,
                    course: course,
                    cutoff: cutoff,
                    score: score,
                    diff: diff,
                    status: status,
                    meetsOlevel: meetsOlevel
                });
            });
        });

        results.sort(function (a, b) {
            if (a.meetsOlevel !== b.meetsOlevel) return a.meetsOlevel ? -1 : 1;
            if (a.status === "Strong Match" && b.status !== "Strong Match") return -1;
            if (a.status !== "Strong Match" && b.status === "Strong Match") return 1;
            return b.diff - a.diff;
        });

        return results;
    };

    ns.getTypeCounts = function () {
        var counts = {};
        ns.institutions.forEach(function (i) {
            counts[i.type] = (counts[i.type] || 0) + 1;
        });
        return counts;
    };

})(AdmissionFinder);
