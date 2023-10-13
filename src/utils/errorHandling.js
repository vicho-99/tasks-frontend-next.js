import { toast } from 'sonner'

export default function errorHandling(error) {

    if (error.response) {

        toast.error(error.response.data.message.toString())


    } else if (error.request) {

        toast.error(error.request.toString())

    } else {

        toast.error(error.toString())
    }

}