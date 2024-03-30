import RegistrationField from '../../../common/RegistrationField';
import { useAppSelector } from '../../../../hooks/redux';

 const getHoursList = (from: number, to: number) => {
  const minutes = ['00', '30'];
  const res: Array<string> = [];
  for (let index = from; index < to; index++) {
    minutes.forEach(minute => res.push(index + ':' + minute));
  }
  res.push(to + ':' + '00');
  return res;
};

export const getSelectOption = () =>
  getHoursList(6, 21).map((hours, idx) => {
    return (
      <option key={idx} value={hours}>
        {hours}
      </option>
    );
  });

const ShippingData = ({
  handleChange,
}: {
  handleChange: (field: string, value: any) => void;
}) => {
  const { address, workHoursFrom, workHoursTo, deliveryConditions } =
    useAppSelector(state => state.sellerRegistration);

  return (
    <div className="flex flex-col w-[558px] mt-20 mx-auto">
      <div className="flex flex-col gap-6 mb-7">
        <RegistrationField
          label="Адреса для самовивізу"
          inputType="text"
          inputId="factoryAddress"
          value={address}
          placeholder="Введіть адресу для самовивізу"
          onChange={value => handleChange('address', value)}
        />

        {/* <RegistrationField
          label="Часи роботи підприємства для самовивізу продуктів та товарів"
          inputType="text"
          inputId="workSchedule"
          value={workSchedule}
          placeholder="Будь-ласка напішіть дійсні часи роботи"
          onChange={value => handleChange(setWorkSchedule, value)}
        /> */}

        <label className="flex gap-1 flex-col">
          Часи роботи підприємства для самовивізу продуктів та товарів
          <div className="flex gap-3">
            <label htmlFor="fromHours" className="flex-auto">
              З
              <select
                className="border border-gray-200 rounded p-3 outline-none focus:bg-none focus:ring-0 ml-2 pr-20 "
                id="fromHours"
                placeholder="Вибиріть час"
                value={workHoursFrom}
                onChange={({ target }) =>
                  handleChange('workHoursFrom', target.value)
                }
              >
                {getSelectOption()}
              </select>
            </label>
            <label htmlFor="toHours" className="flex-auto">
              До
              <select
                className="border border-gray-200 rounded p-3 outline-none focus:bg-none focus:ring-0 ml-2 pr-20"
                id="toHours"
                placeholder="Вибиріть час"
                value={workHoursTo}
                onChange={({ target }) =>
                  handleChange('workHoursTo', target.value)
                }
              >
                {getSelectOption()}
              </select>
            </label>
          </div>
        </label>

        <RegistrationField
          label="Умови доставки продукції"
          inputType="text"
          inputId="deliveryConditions"
          value={deliveryConditions}
          placeholder="Опишіть умови доставки"
          onChange={value => handleChange('deliveryConditions', value)}
        />
      </div>
    </div>
  );
};

export default ShippingData;
