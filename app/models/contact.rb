class Contact < ActiveRecord::Base

  validates :lastname, presence: {
    message: "Vous devez renseigner au moin un nom de contact."
  }

  validates :email, presence: {
    message: "Vous devez renseigner au moin un email de contact."
  }

  validates :subject, presence: {
    message: "Vous devez renseigner le sujet de votre prise de contact."
  }

  validates :message, presence: {
    message: "Vous devez écrire un message expliquant votre demande."
  }

end
