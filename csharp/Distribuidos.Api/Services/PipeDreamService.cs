
using System.Text;
using Distribuidos.Api.Models;
using Newtonsoft.Json;
using System.Net.Http.Headers;




namespace Distribuidos.Api.Services{

    public class PipeDreamService: IPipeDreamService{
        
        public async Task<bool> SendWelcome(WelcomeModel body){

            string url = "https://eontxv5q0p1pd1j.m.pipedream.net";
            var cliente = new HttpClient();
            var byteData = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(new {
                user_name = body.userName, email = body.email
            }));

            using(var content = new ByteArrayContent(byteData)){
                content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                var response = await cliente.PostAsync(url, content);
                if(response.IsSuccessStatusCode){
                    return true;
                }
                return false;
            }











        }



    }
}