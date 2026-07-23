using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();

builder.Services.AddControllersWithViews();

var app = builder.Build();

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(builder.Environment.ContentRootPath, "public")),
    RequestPath = string.Empty,
});

app.UseRouting();

app.MapControllerRoute(
    name: "landing",
    pattern: "",
    defaults: new { controller = "Home", action = "Index" });
app.MapControllerRoute(
    name: "compare",
    pattern: "compare",
    defaults: new { controller = "Home", action = "Compare" });
app.MapControllerRoute(
    name: "admin-pulse",
    pattern: "admin-pulse",
    defaults: new { controller = "Home", action = "AdminPulse" });
app.MapControllerRoute(
    name: "recommendations",
    pattern: "recommendations",
    defaults: new { controller = "Home", action = "Recommendations" });
app.MapControllerRoute(
    name: "institutions",
    pattern: "institutions",
    defaults: new { controller = "Home", action = "Institutions" });
app.MapControllerRoute(
    name: "institution-detail",
    pattern: "institution/{id}",
    defaults: new { controller = "Home", action = "InstitutionDetail" });
app.MapControllerRoute(
    name: "cutoff",
    pattern: "cutoff",
    defaults: new { controller = "Home", action = "Cutoff" });
app.MapControllerRoute(
    name: "subjects",
    pattern: "subjects",
    defaults: new { controller = "Home", action = "Subjects" });
app.MapControllerRoute(
    name: "career",
    pattern: "career",
    defaults: new { controller = "Home", action = "Career" });
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
