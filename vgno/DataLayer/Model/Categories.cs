using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DataLayer.Model
{
    internal class Categories
    {
        [Key]
        public int category_Id { get; set; }

        [Display(Name = "نام")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string name { get; set; }


        [Display(Name = "وضعیت")]
        public bool status { get; set; }


        [Display(Name = "تصویر")]
        public string image { get; set; }

        [Display(Name = "تاریخ ثبت")]
        public string created_at { get; set; }



        #region Relatipns 
        public virtual List<Services> Services { get; set; }
        public virtual List<business> Businesses { get; set; }
        public virtual List<personnel> Personnel { get; set; }
        #endregion
    }
}
