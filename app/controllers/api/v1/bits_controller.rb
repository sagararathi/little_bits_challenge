class Api::V1::BitsController < Api::V1::BaseController
  def index
    respond_with Bit.all
  end
end
