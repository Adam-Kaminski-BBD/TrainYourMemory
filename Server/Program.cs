using Server.Repositories;
using Server.Service;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddEnvironmentVariables();
// Add services to the container.
builder.Services.AddSingleton<DataContext, DataContext>();
builder.Services.AddSingleton<IUserRepository, UserRepository>();
builder.Services.AddSingleton<IDrinksRepository, DrinksRepository>();
builder.Services.AddSingleton<ILocationsRepository, LocationsRepository>();
builder.Services.AddSingleton<IFriendRepository, FriendRepository>();
builder.Services.AddSingleton<ILogRepository, LogRepository>();
builder.Services.AddSingleton<UserService, UserService>();
builder.Services.AddSingleton<LocationsService, LocationsService>();
builder.Services.AddSingleton<DrinksService, DrinksService>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
