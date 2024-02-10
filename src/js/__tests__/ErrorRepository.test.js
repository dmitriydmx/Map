import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository', () => {
  let errorRepository;

  beforeEach(() => {
      errorRepository = new ErrorRepository();
  });

  it('должно вернуть правильное описание ошибки', () => {
      errorRepository.addError(404, 'Not Found');
      errorRepository.addError(500, 'Internal Server Error');

      expect(errorRepository.translate(404)).toEqual('Not Found');
      expect(errorRepository.translate(500)).toEqual('Internal Server Error');
  });

  it('должно возвращать «Неизвестная ошибка» для неизвестного кода ошибки', () => {
      expect(errorRepository.translate(123)).toEqual('Unknown error');
  });
});
