# frozen_string_literal: true

class Folder < ApplicationRecord
  belongs_to :user, inverse_of: :folders
  has_many :notes, dependent: :destroy, inverse_of: :folder

  validates :name, uniqueness: { scope: :user_id }
end
