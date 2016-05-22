class DocumentsController < ApplicationController

  def index
    @documents = Document.order(type: :asc).all
    @groups = @documents.group_by{|x| x.type_name}
  end

  def show
    @document = Document.find params[:id]
    @title = @document.title
  end

  def edit
    @document = Document.find params[:id]
    @title = "Document ##{@document.id}"
    @link_types = Document::TYPES
    @links = @document.links
  end

  def update
    @document = Document.find params[:id]
    @document.links = params[:document][:links]
    @document.update(document_params)
    redirect_to document_path(@document)
  end

  def new
    @document = Document.new
    @title = "Document New"
    @link_types = Document::TYPES
    @links = @document.links
  end

  def create
    @document = Document.new(document_params)
    @document.links = params[:document][:links]
    @document.save!
    redirect_to document_path(@document)
  end

  def destroy
    @document = Document.find params[:id]
    
  end

  private
    def document_params
      params.require(:document).permit(:title, :content, :type)
    end
end
