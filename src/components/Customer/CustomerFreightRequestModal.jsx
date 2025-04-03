// import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import {
    Typography,
    Paper,
    // Grid,
    Button,
    Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid';

import {useTranslation} from "react-i18next"

import { MdConfirmationNumber } from "react-icons/md";

const CustomerFreightRequestModal = ({open, setOpen, order, addOrderMutation, clearOrder}) => {
 
    // const [open, setOpen] = useState(true)
    // console.log("open in modal is: ", open);

    const {t} = useTranslation();

    const handleConfirmClick = () => {

      addOrderMutation.mutate(order);
      clearOrder();

      setOpen(false)
    }

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-full overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  {/* <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" /> */}
                  <MdConfirmationNumber />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    Confirm request
                  </DialogTitle>
                  <div className="mt-2">
                    {/* <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of your data will be permanently removed.
                      This action cannot be undone.
                    </p> */}
                    <Paper className="p-6 rounded-md shadow-md">
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold'}}>
                            Job Details
                        </Typography>
                        <Divider className="mb-4" />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                                  {t("orderFreightModal.fullName")}:
                                </Typography>
                                <Typography>{order.name}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                                    {t("orderFreightModal.phone")}:
                                </Typography>
                                <Typography>{order.phone}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                                    {t("orderFreightModal.weight")}:
                                </Typography>
                                <Typography>{order.weight} {order.weightUnit}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                                    {t("orderFreightModal.truckType")}:
                                </Typography>
                                <Typography>{order.truck}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                                    {t("orderFreightModal.pickupLocation")}:
                                </Typography>
                                <Typography>{order.source}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                                    {t("orderFreightModal.dropoffLocation")}:
                                </Typography>
                                <Typography>{order.destination}</Typography>
                            </Grid>                           
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                                  {t("orderFreightModal.price")}:
                                </Typography>
                                <Typography>{order.price} ETB/{order.priceUnit}</Typography>
                            </Grid>
                            {/* Add more details here based on the properties of your job object */}
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                                    {t("orderFreightModal.additionaldetails")}:
                                </Typography>
                                <Typography>
                                    {/* You can add more specific details here based on your job object */}
                                    No additional details provided
                                </Typography>
                            </Grid>
                            {/* <Grid item xs={12} className="mt-4">
                                <Button className="ml-2">
                                    Contact Agent:
                                </Button>
                                <Button className="ml-2">0911234567 / 0911*******</Button>
                            </Grid> */}
                        </Grid>
                    </Paper>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleConfirmClick}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Confirm
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Back
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default CustomerFreightRequestModal