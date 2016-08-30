using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace www.Models
{
    public class Purchase
    {
        // ID заказа
        public int PurchaseId { get; set; }
        // имя и фамилия заказчика
        public string Person { get; set; }
        // телефон заказчика
        public string tel { get; set; }
        // ID заказа
        public int Id { get; set; }
        // дата заказа
        public DateTime Date { get; set; }
    }
}