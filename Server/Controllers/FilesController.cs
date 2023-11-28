using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        [HttpPost]
        [Route("UploadFiles")]
        public ActionResult UploadFiles()
        {

            var temp = "stop here";

            return Ok("Post route hit");
        }
    }
}
