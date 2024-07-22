using LoginAPI.Interfaces;
using LoginAPI.Models;
using LoginAPI.Models.DTO;
using System.Numerics;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;

namespace LoginAPI.Services
{
    public class AgentService : IManageAgent
    {
        private readonly IRepo<int, Agent> _repo;
        private readonly ITokenGenerate _tokenGenerate;

        public AgentService(IRepo<int, Agent> agentRepo, ITokenGenerate tokenGenerate)
        {
            _repo = agentRepo;
            _tokenGenerate = tokenGenerate;
        }
        public async  Task<Agent> AddAgent(AgentDTO item)
        {
            var hmac = new HMACSHA512();
            item.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(item.PasswordString ?? ""));
            item.User.PasswordKey = hmac.Key;
            item.Status = "notapproved";
            item.User.Role = "agent";


            Agent agent = await _repo.Add(item);
            UserDTO user;
            if (agent != null)
            {
                user = new UserDTO();
                user.UserId = agent.User.UserId;
                user.Role = agent.User.Role;
                user.Token = await _tokenGenerate.GenerateToken(user);
                return agent;
            }

            return null;
        }

        public async Task<bool> ApproveAgent(UpdateAgentDTO item)
        {

            Agent agentData = await _repo.Get(item.Id);
            if (agentData != null)

            {
                agentData.Status = item.Status;

                Agent agent = await _repo.Update(agentData);
                if (agent != null)
                {
                    return true;
                }

            }

            return false;
        }

        public async Task<bool> DeleteAgent(IdDTO item)
        {
            var result = await _repo.Delete(item.id);
            if(result != null)
            {
                return true;
            }
            return false ;
        }

        public async Task<ICollection<Agent>> GetAllAgent()
        {
            ICollection<Agent> agents = await _repo.GetAll();
            if (agents != null)
            {
                return agents;
            }
            return null;
        }
    }
}
