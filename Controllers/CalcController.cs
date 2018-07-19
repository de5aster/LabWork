using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestoreCalculator.Models;
using RestoreCalculator.Services;

namespace RestoreCalculator.Controllers
{
    [Route ("home/calc/api/[action]")]
    public class CalcController : Controller
    {
        
        CalculatorService calcService = new CalculatorService();
        List<string> fileLines = new List<string>();

        [HttpPost]
        public async Task<IActionResult> Load(IFormFile file)
        {
            var filePath = Path.GetTempFileName();
            try
            {
                if (file.Length > 0)
                {
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }

                    using (var streamReader = new StreamReader(filePath, System.Text.Encoding.GetEncoding(1251)))
                    {
                        while (true)
                        {
                            string s = streamReader.ReadLine();
                            if (s == null)
                                break;
                            fileLines.Add(s);
                        }

                        streamReader.Close();
                        if (fileLines[0] == "1CClientBankExchange")
                        {
                            return Ok(calcService.GetAll(fileLines));
                        }
                        else
                        {
                            return BadRequest("Некорректный формат");
                        }
                    }

                }

                return BadRequest();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Restore([FromBody] RestoreParam restoreParam)
        {
            var res = calcService.GetPrice(restoreParam);
            return Ok(res);
        }
    }
} 
