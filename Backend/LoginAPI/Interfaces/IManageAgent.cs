using LoginAPI.Models;
using LoginAPI.Models.DTO;
using System.Numerics;

namespace LoginAPI.Interfaces
{
    public interface IManageAgent
    {
        public Task<Agent> AddAgent(AgentDTO item);
        public Task<ICollection<Agent>> GetAllAgent();
        public Task<bool> ApproveAgent(UpdateAgentDTO item);
        public Task<bool> DeleteAgent(IdDTO item);





    }
}
