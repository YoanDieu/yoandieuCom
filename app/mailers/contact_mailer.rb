class ContactMailer < ApplicationMailer

  default from: "yoan.dieu@gmail.com"

  def contact_email(contact)
    @contact = contact
    mail(to: 'yoan.dieu@gmail.com', subject: "test")
  end

end
