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
    internal class additional_services
    {
        [Key]
        public int id { get; set; }

        [Display(Name = "نام")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string name { get; set; }

        [Display(Name = "قیمت")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string price { get; set; }

        [Display(Name = "")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Services")]
        public int service_Id { get; set; }


        #region Relations 
        public virtual Services Services { get; set; }  
        #endregion
    }
}
