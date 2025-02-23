namespace Nebula_OS.Services
{
  public class NebulaApiService
  {

    public HttpClient HttpClient { get; set; } = new();

    public NebulaApiService()
    {
      HttpClient.BaseAddress = new Uri("https://localhost:7271");
    }


  }
}
