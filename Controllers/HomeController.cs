using Microsoft.AspNetCore.Mvc;

namespace AdmissionFinder.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Compare()
    {
        return View();
    }

    public IActionResult AdminPulse()
    {
        return View();
    }

    public IActionResult Recommendations(string score, string olevel)
    {
        ViewData["score"] = score;
        ViewData["olevel"] = olevel;
        return View();
    }

    public IActionResult Institutions()
    {
        return View();
    }

    public IActionResult InstitutionDetail(string id)
    {
        ViewData["id"] = id;
        return View();
    }

    public IActionResult Cutoff()
    {
        return View();
    }

    public IActionResult Subjects()
    {
        return View();
    }

    public IActionResult Career()
    {
        return View();
    }
}
