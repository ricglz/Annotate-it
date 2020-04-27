# frozen_string_literal: true

class User < ApplicationRecord
  has_many :notes, dependent: :destroy, inverse_of: :user
  has_many :folders, dependent: :destroy, inverse_of: :user
  has_many :tags, dependent: :destroy, inverse_of: :user

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
