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
    internal class persontask
    {
        [Display(Name = "پرسنل")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Personnel")]
        public int person_Id { get; set; }

        [Display(Name = "سرویس")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Services")]
        public int service_Id { get; set; }

        [Display(Name = "قیمت پرسنل")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string price_person { get; set; }

        [Display(Name = "تاریخ ایجاد")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public DateTime created_at { get; set; }

        #region Relations
        public virtual personnel Personnel { get; set; }

        public virtual Services Services { get; set; }
        #endregion

    }
}
