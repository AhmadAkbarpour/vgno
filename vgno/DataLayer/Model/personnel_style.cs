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
    internal class personnel_style
    {
        [Display(Name = "پرسنل")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Personnel")]
        public int personnel { get; set; }

        [Display(Name = "مدل مو")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Hair_Style")]
        public int style { get; set; }

        [Display(Name = "قیمت پرسنل")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string price_person { get; set; }


        #region Relations
        public virtual personnel Personnel { get; set; }
        public virtual hair_style Hair_Style { get; set; }
        #endregion
    }
}
