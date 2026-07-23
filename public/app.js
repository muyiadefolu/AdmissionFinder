(function (ns) {
    "use strict";

    ns.ui = ns.ui || {};

    // ── Navigation active state ─────────────────────────────────
    ns.ui.setActiveNav = function (selector) {
        var links = document.querySelectorAll("#nav a, header nav a, .nav-item");
        links.forEach(function (link) {
            link.classList.remove("active", "font-bold", "border-b-2", "border-secondary", "pb-1");
            link.classList.add("text-on-surface-variant");
        });
        var target = document.querySelector(selector);
        if (target) {
            target.classList.add("active", "font-bold", "border-b-2", "border-secondary", "pb-1");
            target.classList.remove("text-on-surface-variant");
        }
    };

    // ── Chip helpers ────────────────────────────────────────────
    ns.ui.statusChip = function (status) {
        var cls, icon;
        switch (status) {
            case "Strong Match":     cls = "chip-up"; icon = "verified"; break;
            case "Borderline":       cls = "chip-flat"; icon = "warning"; break;
            case "Below Cut-off":    cls = "chip-down"; icon = "cancel"; break;
            case "Below Cut-off (Close)": cls = "chip-down"; icon = "warning"; break;
            default:                 cls = "chip-flat"; icon = "info"; break;
        }
        return '<span class="chip ' + cls + '"><span class="material-symbols-outlined text-sm">' + icon + '</span> ' + status + '</span>';
    };

    // ── Render helpers ──────────────────────────────────────────
    ns.ui.renderCard = function (rec) {
        var i = rec.institution, c = rec.course;
        var initials = i.name.split(" ").map(function (w) { return w[0]; }).slice(0, 2).join("");
        return '<div class="match-card bg-surface-container-lowest p-5 rounded-xl border-l-4 ' +
            (rec.status === "Strong Match" ? 'border-on-tertiary-container' : rec.status === "Borderline" ? 'border-[#F59E0B]' : 'border-error') +
            ' shadow-sm flex flex-col justify-between cursor-pointer hover:shadow-md transition-all" onclick="window.location.href=\'/institution/' + i.id + '\'">' +
            '<div class="flex justify-between items-start mb-2">' +
            '<div class="flex items-center gap-2"><div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style="background:#0051d5">' + initials + '</div></div>' +
            ns.ui.statusChip(rec.status) +
            '</div>' +
            '<h3 class="font-headline-sm text-headline-sm text-primary mb-1">' + c.name + '</h3>' +
            '<p class="font-body-sm text-body-sm text-on-surface-variant mb-2">' + i.name + '</p>' +
            '<div class="flex items-center justify-between mt-1">' +
            '<span class="text-label-sm text-on-surface-variant">Cut-off: <strong>' + rec.cutoff + '</strong></span>' +
            '<span class="text-label-md" style="color:' + (rec.status === "Strong Match" ? '#00754a' : rec.status === "Borderline" ? '#b45309' : '#ba1a1a') + '">Score: ' + rec.score + '</span>' +
            '</div>' +
            '</div>';
    };

    // ── Search institutions (for search bars) ───────────────────
    ns.ui.filterInstitutions = function (query) {
        query = query.trim().toLowerCase();
        if (!query) return ns.institutions;
        return ns.institutions.filter(function (i) {
            return i.name.toLowerCase().indexOf(query) >= 0 ||
                   i.state.toLowerCase().indexOf(query) >= 0 ||
                   i.type.toLowerCase().indexOf(query) >= 0;
        });
    };

})(AdmissionFinder);
