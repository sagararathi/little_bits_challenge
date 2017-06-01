class Api::V1::InventionsController < Api::V1::BaseController
  def index
    respond_with Invention.all
  end

  def show
    invention = Invention.find_by(permalink: params[:permalink])
    respond_with invention, json: invention
  end

  def create
    invention = Invention.create(safe_params)
    if invention.valid?
      invention.bits << Bit.where(id: params[:invention][:bits].map!(&:to_i))
    end
    respond_with :api, :v1, Invention.create(safe_params)
  end

  def update
    invention = Invention.find(params[:invention][:id])
    invention.update_attributes(safe_params)
    respond_with invention, json: invention

  end

  def destroy
    respond_with Invention.destroy(params[:id])
  end

  private
  def safe_params
    params.require(:invention).permit(:id, :title, :description, :tag_list, :tag_list => [], user_attributes: [:username, :email])
  end
end
