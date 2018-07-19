using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using Newtonsoft.Json.Linq;
using RestoreCalculator.Models;

namespace RestoreCalculator.Services
{
    public class CalculatorService
    {
        public List<Payment> PaymentList;
        public List<string> StartList = new List<string>();
        public List<string> EndList = new List<string>();
        private readonly Info _info = new Info();

        public JObject GetAll(List<string> fileList)
        {
            PaymentList = new List<Payment>();
            
            SavePayment(fileList, PaymentList, _info, StartList, EndList);
            var resultParseStatement = ParseStatement(PaymentList);

            var result = new JObject()
            {
                ["document"] = new JObject()
                {
                    ["buy"] = resultParseStatement.buy,
                    ["sell"] = resultParseStatement.sell,
                    ["equaring"] = resultParseStatement.equaring,
                    ["order"] = resultParseStatement.order,
                    ["tax"] = resultParseStatement.tax
                },
                ["info"] = new JObject()
                {
                    ["startDate"] = _info.startDate,
                    ["endDate"] = _info.endDate,
                    ["month"] = _info.month
                }
            };
            return result;
        }

        public void SavePayment(List<string> inputList, List<Payment> paymentList, Info info, List<string> start, List<string> end)
        {
            bool isCreate = false;
            Payment payment = null;
            

            foreach (var str in inputList)
            {
                var temp = str.Split('=');
                if (temp[0] == "СекцияДокумент")
                {
                    payment = new Payment
                    {
                        doctype = temp[1]
                    };
                    isCreate = true;
                }
                if (temp[0] == "КонецДокумента")
                {
                    paymentList.Add(payment);
                    isCreate = false;
                }
                else if (isCreate)
                {
                    AddPayment(temp, payment);
                }
                if (!isCreate)
                {
                    GetInfo(info, temp, start, end);
                }
            }
        }

        private void GetInfo(Info info, string[] temp, List<string> start, List<string> end)
        {
            if (temp[0] == "ДатаНачала"){
                start.Add(temp[1]);
            }
            if (temp[0] == "ДатаКонца"){
                end.Add(temp[1]);
            }
            if (temp[0] == "КонецФайла")
            {
                if (start.Any()) 
                {
                    if (end.Any())
                    {
                        info.startDate = GetStartDate(start).Substring(0, 10);
                        info.endDate = GetEndDate(end).Substring(0, 10);
                        info.month = CalculateMonth(info.startDate, info.endDate);
                    }
                }
            }
        }

        private static string GetStartDate(IEnumerable<string> start)
        {
            var dtList = ConvertToDateTimeList(start);
            SortAscending(dtList);
            return dtList[0].ToString(CultureInfo.CurrentCulture);
        }

        private static string GetEndDate(IEnumerable<string> end)
        {
            var dtList = ConvertToDateTimeList(end);
            SortDescending(dtList);
            return dtList[0].ToString(CultureInfo.CurrentCulture);
        }

        private static List<DateTime> ConvertToDateTimeList(IEnumerable<string> strList)
        {
            return strList.Select(date => Convert.ToDateTime(date.Replace('.', '/'))).ToList();
        }

        private static void SortAscending(List<DateTime> list)
        {
            
             list.Sort((a, b) => a.CompareTo(b));
        }

        private static void SortDescending(List<DateTime> list)
        {
            list.Sort((a, b) => b.CompareTo(a));
        }


        private static void AddPayment(string[] str, Payment payment)
        {
            switch (str[0])
            {
                case "Номер":
                    payment.inbankid = str[1];
                    break;
                case "Дата":
                    payment.docdate = str[1];
                    break;
                case "Сумма":
                    payment.summ = str[1];
                    break;
                case "ДатаСписано":
                    payment.outdate = str[1];
                    break;
                case "ДатаПоступило":
                    payment.indate = str[1];
                    break;
                case "ПлательщикСчет":
                    payment.payeraccount = str[1];
                    break;
                case "Плательщик":
                    payment.payerinfo = str[1];
                    break;
                case "ПлательщикИНН":
                    payment.payerinn = str[1];
                    break;
                case "Плательщик1":
                    payment.payer = str[1];
                    break;
                case "ПлательщикРасчСчет":
                    payment.payerdealaccount = str[1];
                    break;
                case "ПлательщикБанк1":
                    payment.payerbank1 = str[1];
                    break;
                case "ПлательщикБанк2":
                    payment.payerbank2 = str[1];
                    break;
                case "ПлательщикБИК":
                    payment.payerbik = str[1];
                    break;
                case "ПлательщикКорсчет":
                    payment.payerfixaccount = str[1];
                    break;
                case "ПолучательСчет":
                    payment.recieveraccount = str[1];
                    break;
                case "Получатель":
                    payment.recieverinfo = str[1];
                    break;
                case "ПолучательИНН":
                    payment.recieverinn = str[1];
                    break;
                case "Получатель1":
                    payment.reciever1 = str[1];
                    break;
                case "ПолучательРасчСчет":
                    payment.recieverdealaccount = str[1];
                    break;
                case "ПолучательБанк1":
                    payment.recieverbank1 = str[1];
                    break;
                case "ПолучательБанк2":
                    payment.recieverbank2 = str[1];
                    break;
                case "ПолучательБИК":
                    payment.recieverbik = str[1];
                    break;
                case "ПолучательКорсчет":
                    payment.recieverfixaccount = str[1];
                    break;
                case "ВидОплаты":
                    payment.paytype = str[1];
                    break;
                case "НазначениеПлатежа":
                    payment.payditection = str[1];
                    break;
                case "СтатусСоставителя":
                    payment.makerstatus = str[1];
                    break;
                case "ПлательщикКПП":
                    payment.payerkpp = str[1];
                    break;
                case "ПолучательКПП":
                    payment.recieverkpp = str[1];
                    break;
                case "ПоказательКБК":
                    payment.showerkbk = str[1];
                    break;
                case "ОКАТО":
                    payment.okato = str[1];
                    break;
                case "ПоказательОснования":
                    payment.showerfundament = str[1];
                    break;
                case "ПоказательПериода":
                    payment.showerperiod = str[1];
                    break;
                case "ПоказательНомера":
                    payment.showernumber = str[1];
                    break;
                case "ПоказательДаты":
                    payment.showerdate = str[1];
                    break;
                case "ПоказательТипа":
                    payment.showertype = str[1];
                    break;
                case "СрокПлатежа":
                    payment.paymentperiod = str[1];
                    break;
                case "Очередность":
                    payment.quenue = str[1];
                    break;
            }
        }

        private Document ParseStatement(List<Payment> payment)
        {
            Document docCount = new Document();
            foreach (var pay in payment)
            {
                switch (GetTypeDocument(pay))
                {
                    case "tax":
                        docCount.tax++;
                        break;
                    case "equaring":
                        docCount.equaring++;
                        break;
                    case "order":
                        docCount.order++;
                        break;
                    case "sell":
                        docCount.sell++;
                        break;
                    case "buy":
                        docCount.buy++;
                        break;
                }
            }
            return docCount;
        }
        private string GetTypeDocument(Payment pay)
        {
            if (IsTaxation(pay.showerkbk)) { return "tax"; }
            else if(IsBankCommission(pay.recieveraccount)) { return "order"; }
            else if (IsEquaring(pay.payditection)) { return "equaring"; }
            if (IsBuy(pay)) { return "buy"; } //покупки
            if (IsSell(pay)) { return "sell"; } //Продажи
            return "";
        }
        private static bool IsSell(Payment pay)
        {
            if (IsEquaring(pay.payditection)) { return false; }
            else if (string.IsNullOrEmpty(pay.indate)) { return false; }
            else return true;
        }

        private static bool IsBuy(Payment pay)
        {
            if (IsTaxation(pay.showerkbk)) { return false; }
            else if (IsEquaring(pay.payditection)) { return false; }
            else if (string.IsNullOrEmpty(pay.outdate)) { return false; }
            else return true;
        }

        private static bool IsTaxation(string showerkbk)
        {
            if (showerkbk == null)
            {
                return false;
            }
            else if (showerkbk == "")
            {
                return false;
            }
            else return true;
        }

        private static bool IsBankCommission(string value)
        {
            return value.Substring(0, 5).Equals("70601") || value.Substring(0, 5).Equals("47423");
        }

        private static bool IsEquaring(string purpose)
        {
            var equaringList = new List<string>()
            {
                "комиссия",
                "комиссия:",
                "комиссии",
                "комисс.",
                "комиссия банка",
                "комисс.сбор",
                "комисс.сбор."
            };

            var tempPurposeOfPayment = purpose.Split(' ');
            foreach (var sub in equaringList)
            {
                for (int i = 0; i < tempPurposeOfPayment.Length; i++)
                {
                    if (tempPurposeOfPayment[i].ToLower() == sub)
                    {
                        if (tempPurposeOfPayment[i + 1] == "банка")
                        {
                            if (IsNumeric(tempPurposeOfPayment[i + 2]))
                                return true;
                        }
                        else
                        {
                            if (IsNumeric(tempPurposeOfPayment[i + 1]))
                                return true;
                        }
                    }
                }
            }
            return false;
        }
        private static bool IsNumeric(string strFromPurpose)
        {
            var temp = strFromPurpose.ToCharArray();
            return Char.IsNumber(temp[0]);
        }

        private static int CalculateMonth(string startDate, string endDate)
        {
            var firstDate = startDate.Split('.');
            var secondDate = endDate.Split('.');
            if (Convert.ToInt32(secondDate[2]) - Convert.ToInt32(firstDate[2]) == 0)
            {
                if (Convert.ToInt32(secondDate[0]) > 20)
                    return Convert.ToInt32(secondDate[1]) + 1 - Convert.ToInt32(firstDate[1]);
                else
                    return Convert.ToInt32(secondDate[1]) - Convert.ToInt32(firstDate[1]);
            }
            else
            {
                return (Convert.ToInt32(secondDate[2]) - Convert.ToInt32(firstDate[2]) - 1) * 12 + (13 - Convert.ToInt32(firstDate[1])) + Convert.ToInt32(secondDate[1]);
            }
        }

        public double GetPrice(RestoreParam restoreParams) {

            var regionCoeficient = GetRegionCoefficient(restoreParams.Region);            
            var tariff = GetTariff(restoreParams.Document, restoreParams.TaxactionSystem);
            return (tariff * regionCoeficient); 
        }

        private int GetTariff(double document, string taxactionSystem)
        {
            var lines = ReadEmbeddedFile("TariffPrices.txt");
            var price = 0;
            var tariffId = GetTariffId(document);
            var taxSystem = GetTaxactionSystem(taxactionSystem);

            foreach (var line in lines)
            {
                var splitted = line.Split(";");
                if (splitted[0] == tariffId) {
                    price = Convert.ToInt32(splitted[taxSystem]);
                }
            }
            return price;
        }

        private static string GetTariffId(double doc)
        {
            var ops = Convert.ToInt32(Math.Round(doc, 0));

            if (ops > 500)
                return "restore_501_600";
            if (ops > 400)
                return "restore_401_500";
            if (ops > 300)
                return "restore_301_400";
            if (ops > 200)
                return "restore_201_300";
            if (ops > 175)
                return "restore_176_200";
            if (ops > 150)
                return "restore_151_175";
            if (ops > 125)
                return "restore_126_150";
            if (ops > 100)
                return "restore_101_125";
            if (ops > 75)
                return "restore_76_100";
            if (ops > 50)
                return "restore_51_75";
            if (ops > 30)
                return "restore_31_50";
            if (ops > 10)
                return "restore_11_30";
            return "restore_0_10";

        }

        private static int GetTaxactionSystem(string taxactionSystem)
        {
            switch (taxactionSystem)
            {
                case "envd":
                    return 1;
                case "usnd":
                    return 2;
                case "usndr":
                    return 3;
                case "osno":
                    return 4;   
                default:
                    return 0;
            }
        }

        private static double GetRegionCoefficient(string region)
        {
            var lines = ReadEmbeddedFile("RegionCoefficients.txt");
            double coef = 1;
            foreach (var line in lines)
            {                
                var splited = line.Split(';');
                if (splited.Length != 2)
                {
                    continue;
                }
                var reg = splited[0];
                if (reg == region) {
                    if (!Double.TryParse(splited[1], NumberStyles.Any, CultureInfo.InvariantCulture, out coef)) {
                        continue;
                    }
                }                
            }
            return coef;
        }

        //linux  - / 
        //windows - \
        private static string[] ReadEmbeddedFile(string name)
        {
            var resourceName = Directory.GetCurrentDirectory() + $"/lib/{name}";
            using (var reader = new StreamReader(resourceName)) {
                return reader.ReadToEnd().Replace("\r", "").Split('\n');
            }
        }

    }
}

