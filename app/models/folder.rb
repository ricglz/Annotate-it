# frozen_string_literal: true

class Folder < ApplicationRecord
  belongs_to :user, inverse_of: :folders
  has_many :notes, dependent: :delete, inverse_of: :folder
end
