using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Model
{
    internal class Services
    {
        [Key]
        public int service_Id { get; set; }

        [Display(Name = "نام سرویس")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string name { get; set; }

        [Display(Name = "وضعیت")]
        public bool status { get; set; }

        [Display(Name = "تصویر")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string image { get; set; }

        [Display(Name = "توضیحات")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string description { get; set; }

        [Display(Name = "قیمت")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string price { get; set; }

        [Display(Name = "قوانین")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string rules { get; set; }

        [Display(Name = "دسته بندی")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Categories")] 
        public int category_Id { get; set; }

        [Display(Name = "کسب و کار")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Business")]
        public int busines_Id { get; set; }

        [Display(Name = "تاریخ ایجاد")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public DateTime created_at { get; set; }


        #region Relation
        public virtual List<persontask> Persontasks { get; set; }
        public virtual List<additional_services> Additional_serivces { get; set; }
        public virtual List<order> Orders { get; set; }
        public virtual List<service_price> Service_Prices { get; set; }
        public virtual List<personnel> Personnels { get; set; }

        public virtual Categories Categories { get; set; }
        public virtual business Business { get; set; }
        #endregion


    }
}
