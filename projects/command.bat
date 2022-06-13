dotnet new sln
dotnet new webapi -o API
dotnet sln add API
cd API
dotnet run

dotnet tool install --global dotnet-ef
dotnet tool list -g
dotnet ef
dotnet ef migrations add InitialCreate -o Data/Migrations

dotnet ef database update

dotnet ef database drop

donnet new -l
dotnet new gitignore