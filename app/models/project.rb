# frozen_string_literal: true
class Project < ApplicationRecord
  ACCESSABILITY_TYPES = %w(public private).freeze

  belongs_to :user

  has_one :dicom, dependent: :destroy

  accepts_nested_attributes_for :dicom

  validates :name, presence: true

  validates :accessibility, presence: true,
                            inclusion: { in: ACCESSABILITY_TYPES }
end
