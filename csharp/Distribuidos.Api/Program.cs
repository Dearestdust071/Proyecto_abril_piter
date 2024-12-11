using Distribuidos.Api.Services;



var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSingleton<IPipeDreamService, PipeDreamService>();


var app = builder.Build();//

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();


