class CompaniesController < ApplicationController
    before_action :set_company, only: [:show, :update, :destroy]

    # GET /companies
    def index
        @companies = Company.All
        render json: @companies
    end

    # GET /companes/1
    def show
        render json: @company
    end

    # POST /companes
    def create
        @company = Company.new(company_params)

        if @company.save
          render json: @company, status: :created, location: @company
        else
          render json: @company.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /companes/1
    def update
        if @company.update(company_params)
            render json: @company
          else
            render json: @company.errors, status: :unprocessable_entity
          end
    end

    # DELETE /companes/1
    def destroy
        @company.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_company
      @company = Company.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def company_params
      params.require(:company).permit(:ticker)
    end
end