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
    internal class personnel
    {
        [Key]
        public int person_Id { get; set; }


        [Display(Name = "نام")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string first_name { get; set; }

        [Display(Name = "نام خانوادگی")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string last_name { get; set; }

        [Display(Name = "موبایل")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(20, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string phone { get; set; }

        [Display(Name = "کلمه عبور")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string password { get; set; }

        [Display(Name = "تقویم کاری")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string work_calender { get; set; }

        [Display(Name = "تایم کاری")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string work_time { get; set; }

        [Display(Name = "تصویر")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string image { get; set; }

        [Display(Name = "بیوگرافی")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string bio { get; set; }

        [Display(Name = "وضعیت")]
        public bool status { get; set; }
        //It should be enabled by default.
        [Display(Name = "دسته")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Category")]
        public int category_Id { get; set; }

        [Display(Name = "کسب و کار")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Business")]
        public int busines_Id { get; set; }

        [Display(Name = "سرویس")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Service")]
        public int service_Id { get; set; }

        //the personoll and task table is seprate 

        [Display(Name = "تاریخ و زمان ایجاد ")]
        public DateTime created_at { get; set; }


        #region Relations
        public virtual List<persontask> Persontasks  { get; set; }
        public virtual List<order> Orders  { get; set; }
        public virtual List<personnel_style> Personnel_Styles  { get; set; }
        public virtual List<service_price> Service_Prices  { get; set; }
        public virtual List<business> Businesses  { get; set; }

        public virtual Services Service { get; set; }
        public virtual business Business { get; set; }
        public virtual Categories Category { get; set; }
        #endregion

    }
}
