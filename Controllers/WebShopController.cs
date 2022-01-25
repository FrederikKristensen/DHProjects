using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DHProjects.Controllers
{

[ApiController]
[Route ("controller")]
public class WebShopController : ControllerBase
{


         private static readonly List<WebShop> webShops = new List<WebShop>()
        {
            new WebShop(1, "Båd", 300, "en lille plastik båd"),
            new WebShop(2, "gammel bog", 500, "gammel dansk bog"),
            new WebShop(3, "plakat", 600, "plakat fra gamel Danmark"),
            new WebShop(4, "model diesel morter", 750, "plastik model"),
            new WebShop(5, "skib", 200, "stort platik skib")
        };



    [HttpGet]
    public IEnumerable<WebShop> Get(){

        return webShops;

    }

    [HttpGet]
    [Route("{id}")]
    public WebShop Get (int id)
    {

    return webShops.Find(i => i.id == id);

    }

   [HttpGet]
   [Route("titel/{substring}")]
        public IEnumerable<WebShop> GetFromSubstring(String substring)
        {

            return webShops.FindAll(i => i.titel.Contains(substring));
        }

    [HttpPost]
    public void Post([FromBody] WebShop value)
        {
            //finder den største værdi og tilføjer en extra. behøver ikke i en database med identefy 
            value.id = webShops.Max(c => c.id) + 1;
            webShops.Add(value);
        }

      [HttpPut]
      [Route("{id}")]
        public void Put(int id, [FromBody] WebShop value)
        {
            WebShop merchandise = webShops.Find(i => i.id == id);
            if (merchandise != null)
            {
                merchandise.id = value.id;
                merchandise.titel = value.titel;
                merchandise.pris = value.pris;
                merchandise.beskrivelse = value.beskrivelse;
            }

        }
    
        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {

            WebShop merchandise = webShops.Find(i => i.id == id);
            if (webShops != null)
            {
                webShops.Remove(merchandise);
            }
        }

}




}