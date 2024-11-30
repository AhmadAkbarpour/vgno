using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DataLayer.Model
{
    internal class service_price
    {
        [Display(Name = "سرویس")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Services")]
        public int service { get; set; }

        [Display(Name = "پرسنل")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Personnel")]
        public int personnel { get; set; }

        [Display(Name = "قیمت")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string price { get; set; }
        // personnol and task table is sepreate 
        #region Relations
        public virtual  Services Services { get; set; }
        public virtual personnel Personnel { get; set; }
        #endregion
    }
}
