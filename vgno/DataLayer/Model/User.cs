using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Model
{
    internal class User
    {
        [Key]
        public int user_Id { get; set; }

        public string user_number { get; set; }

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

        [Display(Name = "اعتبار حساب")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public int credit { get; set; }

        [Display(Name = "پیام")]
        [MaxLength(300, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string message { get; set; }

        [Display(Name = "امتیاز")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(50, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public int score { get; set; }

        [Display(Name = "وضعیت")]
        public bool status { get; set; }

        [Display(Name = "نقش کاربر")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public int roleId { get; set; }

        [Display(Name = "تاریخ ثبت")]
        public DateTime created_at { get; set; }



        #region Relations

        public virtual List<business_customers> Business_Customers { get; set; }
        public virtual List<order> Orders { get; set; }

        #endregion

    }
}
