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
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
