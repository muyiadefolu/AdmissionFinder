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
}
