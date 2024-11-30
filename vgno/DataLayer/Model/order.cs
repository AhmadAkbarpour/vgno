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
    internal class order
    {
        [Key]
        public int order_Id { get; set; }

        [Display(Name = "نام مشتری")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("User")]
        public int customer_Id { get; set; }

        [Display(Name = "نام پرسنل")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [ForeignKey("Personnel")]
        public int person_Id { get; set; }

        [Display(Name = "نام کسب و کار")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        [ForeignKey("Business")]
        public int business_Id { get; set; }

        [Display(Name = "نام سرویس")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        [ForeignKey("Services")]
        public int service_Id { get; set; }


        [Display(Name = "شماره سفارش")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string order_number{ get; set; }


        [Display(Name = "تاریخ رزرو")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public DateTime order_date { get; set; }


        [Display(Name = "زمان رزرو")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public DateTime order_time { get; set; }


        [Display(Name = "زمان پایان رزرو")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public DateTime order_end_time { get; set; }


        [Display(Name = "تعداد سفارش")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public decimal amount { get; set; }


        [Display(Name = "قیمت")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public string price { get; set; }


        [Display(Name = "کد تخفیف")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public int discount_code { get; set; }


        [Display(Name = "")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public int ad_detail { get; set; }
        //Additional details are in a separate table.

        [Display(Name = "وضعیت")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public bool status { get; set; }


        [Display(Name = "تاریخ و زمان ثبت سفارش")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0} نمیتواند بیشتر از {1}کاراکتر باشد")]
        public DateTime created_at { get; set; }



        #region Relations
        public virtual User User { get; set; }
        public virtual personnel Personnel { get; set; }
        public virtual business Business { get; set; }
        public virtual Services Services { get; set; }
        #endregion


    }
}
