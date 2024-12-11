using Distribuidos.Api.Models; 
namespace Distribuidos.Api.Services {


    public interface IPipeDreamService{
        Task<bool> SendWelcome(WelcomeModel body);




    }
}