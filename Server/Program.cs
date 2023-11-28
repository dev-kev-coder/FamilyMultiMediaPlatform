namespace Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services
                .AddControllers();

            // Add services to the container.
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            #region Serving Static Files

            app.UseDefaultFiles();

            app.UseStaticFiles();
            
            #endregion Serving Static Files

            app.UseRouting();

            //app.UseAuthorization();

            //app.MapFallbackToFile("index.html");

            app.UseEndpoints(endpoints =>
            {
                var test = endpoints;
                endpoints.MapControllers();
            });

            app.Run();
        }
    }
}