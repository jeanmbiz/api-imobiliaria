import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entity";

const listCategoriesService = async (): Promise<Categories[]> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const categories = await categoryRepository.find();

  return categories;
};

export default listCategoriesService;
