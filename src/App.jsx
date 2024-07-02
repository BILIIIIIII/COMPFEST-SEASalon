import React from "react";
import "./index.css";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Services", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [starRating, setStarRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      customerName,
      starRating,
      comment,
    };
    setReviews([...reviews, newReview]);
    setCustomerName("");
    setStarRating(1);
    setComment("");
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex gap-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
              <span className="text-2xl">SEA salon</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">SEA-salon</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Beauty and Elegance Redefined
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl mb-4 font-bold sm:text-4xl">
              Our Services
            </h2>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 496.158 496.158"
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#7671ff"
                        d="M248.082,0.003C111.07,0.003,0,111.063,0,248.085c0,137.001,111.07,248.07,248.082,248.07 c137.006,0,248.076-111.069,248.076-248.07C496.158,111.062,385.088,0.003,248.082,0.003z"
                      ></path>{" "}
                      <path
                        fill="#6B6B6B"
                        d="M222.162,242.441l12.779,21.035l19.775,11.52C246.144,251.305,222.162,242.441,222.162,242.441z"
                      ></path>{" "}
                      <path
                        fill="#D8D8D8"
                        d="M406.695,154.845l-171.672,95.884l19.693,24.268c0,0,122.936-86.334,139.945-97.97 C411.67,165.391,406.695,154.845,406.695,154.845z"
                      ></path>{" "}
                      <path
                        fill="#C6C6C6"
                        d="M407.187,156.566c-0.2-1.104-170.561,96.138-170.561,96.138l18.09,22.292 c0,0,122.936-86.334,139.945-97.97C407.551,168.208,407.814,160.017,407.187,156.566z"
                      ></path>{" "}
                      <path
                        fill="#6B6B6B"
                        d="M235.023,250.728c0,0-18.201,8.652-32.822,15.516c-11.313,5.311-33.719,10.443-41.178,8.953 c-7.461-1.494-14.379-8.969-17.715-12.195c-1.301-1.791-2.755-3.502-4.366-5.112c-17.138-17.139-45.46-16.604-63.258,1.194 c-17.797,17.797-18.332,46.119-1.194,63.257c17.139,17.139,45.461,16.604,63.258-1.194c0,0,27.752-22.975,38.791-30.434 c11.041-7.461,23.498-3.357,29.84,0c10.144,5.37,20.887,4.176,28.049,0.596c7.16-3.58,20.289-16.313,20.289-16.313L235.023,250.728z M125.813,309.212c-10.952,10.952-28.381,11.28-38.928,0.733C76.34,299.4,76.667,281.97,87.619,271.018s28.382-11.279,38.927-0.733 C137.094,280.831,136.766,298.26,125.813,309.212z"
                      ></path>{" "}
                      <path
                        fill="#383838"
                        d="M342.142,318.101c7.83-82.791,17.341-164.463-64.891-214.81 C212.853,63.864,169.286,75.88,144.113,80.915c0,0,153.276,52.584,167.819,146.003c13.57,87.155-13.426,130.899,49.508,173.694 C361.441,400.613,336.904,373.476,342.142,318.101z"
                      ></path>{" "}
                      <path
                        fill="#404040"
                        d="M362.821,299.562c0.633-83.158,3.034-165.348-83.248-208.383 C212.002,57.476,169.639,73.22,144.998,80.416c0,0,157.254,39.113,179.833,130.921c21.065,85.652-2.039,131.571,64.363,168.754 C389.194,380.092,362.398,355.182,362.821,299.562z"
                      ></path>{" "}
                      <path
                        fill="#C6C6C6"
                        d="M320.132,102.497c-11.636,17.009-97.97,139.944-97.97,139.944l24.268,19.693l95.885-171.672 C342.314,90.463,331.767,85.488,320.132,102.497z"
                      ></path>{" "}
                      <path
                        fill="#B7B7B7"
                        d="M340.484,89.951c-3.511-0.602-11.625-0.211-20.353,12.546 c-11.636,17.009-97.97,139.944-97.97,139.944l21.729,17.633C243.891,260.074,341.654,90.152,340.484,89.951z"
                      ></path>{" "}
                      <path
                        fill="#6B6B6B"
                        d="M239.267,358.215c-1.609-1.61-3.32-3.064-5.111-4.365c-3.227-3.336-10.703-10.256-12.195-17.715 c-1.491-7.46,3.643-29.865,8.953-41.179c6.862-14.62,15.516-32.821,15.516-32.821l-24.268-19.693c0,0-12.732,13.129-16.313,20.289 c-3.58,7.163-4.774,17.905,0.596,28.049c3.357,6.342,7.46,18.798,0,29.84c-7.459,11.039-30.436,38.79-30.436,38.79 c-17.797,17.797-18.332,46.119-1.193,63.257c17.139,17.14,45.461,16.604,63.258-1.192 C255.873,403.676,256.407,375.353,239.267,358.215z M226.14,409.538c-10.952,10.952-28.382,11.279-38.929,0.733 c-10.545-10.546-10.217-27.975,0.735-38.927s28.381-11.28,38.927-0.734S237.092,398.586,226.14,409.538z"
                      ></path>{" "}
                      <circle
                        fill="#C1C1C1"
                        cx="230.019"
                        cy="268.399"
                        r="8.296"
                      ></circle>{" "}
                      <path
                        fill="#B2B1B1"
                        d="M221.723,268.399c-0.002,4.582,3.713,8.297,8.295,8.296v-16.592 C225.434,260.101,221.722,263.817,221.723,268.399z"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">Haircuts and Styling</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 496.158 496.158"
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#7671ff"
                        d="M248.082,0.003C111.07,0.003,0,111.063,0,248.085c0,137.001,111.07,248.07,248.082,248.07 c137.006,0,248.076-111.069,248.076-248.07C496.158,111.062,385.088,0.003,248.082,0.003z"
                      ></path>{" "}
                      <g>
                        {" "}
                        <path
                          fill="#DBB595"
                          d="M300.18,5.5l-16.423,43.487c-7.551,8.793-45.442,56.475-45.442,56.475l-48.559,120.975 l67.238,29.945l55.801,13.075l30.441,3.971c0,0,27.348-55.021,38.544-90.368c11.02-34.789,12.409-54.792,16.089-88.304 l15.122-31.987C381.531,34.752,342.895,14.63,300.18,5.5z"
                        ></path>{" "}
                        <path
                          fill="#DBB595"
                          d="M219.643,203.361c-9.386-4.133-20.716,1.012-25.325,11.498l-56.939,131.862 c-4.172,9.504-0.682,20.257,7.83,24.004c8.499,3.737,18.789-0.938,22.973-10.454l61.419-129.301 C234.215,220.495,229.008,207.487,219.643,203.361z"
                        ></path>{" "}
                        <path
                          fill="#DBB595"
                          d="M259.643,220.114c-9.805-4.14-22.214-0.284-26.67,10.271l-63.791,158.536 c-4.039,9.558-0.106,20.376,8.795,24.132c8.885,3.752,19.374-0.97,23.415-10.536l69.604-155.27 C275.444,236.697,269.449,224.256,259.643,220.114z"
                        ></path>{" "}
                        <path
                          fill="#DBB595"
                          d="M299.022,237.531c-9.476-3.867-21.847,0.931-26.154,11.546l-52.012,131.159 c-4.324,10.596-0.129,22.326,9.351,26.189c9.483,3.87,20.667-1.595,24.992-12.194l55.563-129.704 C315.078,253.914,308.505,241.398,299.022,237.531z"
                        ></path>{" "}
                        <path
                          fill="#DBB595"
                          d="M339.457,249.959c-8.971-3.504-21.616,1.378-25.783,12.026l-25.927,76.785 c-3.618,9.252-0.233,19.217,7.545,22.269c7.786,3.04,17.033-1.993,20.649-11.245l26.522-74.863 C346.638,264.265,348.426,253.466,339.457,249.959z"
                        ></path>{" "}
                        <path
                          fill="#DBB595"
                          d="M247.688,99.303c0,0-36.228,22.574-54.657,33.216c-9.391,5.466-21.163,26.371-35.621,44.969 c-13.877,17.874-31.256,30.612-29.447,37.738c4.969,19.552,32.737,6.441,35.9,4.68c26.869-15.027,51.978-47.621,51.978-47.621 l45.284-12.431L247.688,99.303z"
                        ></path>{" "}
                      </g>{" "}
                      <path
                        fill="#EFE4DC"
                        d="M126.781,218.408c19.133-4.204,21.482-30.242,21.482-30.242 C118.912,212.9,126.781,218.408,126.781,218.408z"
                      ></path>{" "}
                      <path
                        fill="#E8C7AF"
                        d="M304.228,336.886c-5.739-2.006-11.117-1.558-13.631,5.635c-0.113,0.33-0.621,2.507-0.72,2.855 c-2.067,7.186,1.195,12.244,6.672,14.158c5.323,1.862,10.769,0.383,13.797-6.342c0.238-0.522,0.848-2.885,1.028-3.404 C313.891,342.595,309.966,338.894,304.228,336.886z"
                      ></path>{" "}
                      <path
                        fill="#F7F3F0"
                        d="M303.88,337.711c-5.485-2.012-10.663-1.662-13.186,5.215c-0.116,0.315-1.509,5.217-1.609,5.549 c-2.09,6.877-1.975,14.939,4.839,17.439c6.811,2.501,11.714-3.204,14.726-9.623c0.234-0.498,1.729-5.576,1.912-6.072 C313.085,343.343,309.366,339.726,303.88,337.711z"
                      ></path>{" "}
                      <path
                        fill="#EFE4DC"
                        d="M304.228,337.886c-5.485-2.012-10.663-1.662-13.186,5.215c-0.116,0.315-0.832,2.244-0.931,2.577 c-2.092,6.876,0.973,11.787,6.208,13.709c5.089,1.868,10.344,0.526,13.356-5.893c0.234-0.499,1.05-2.603,1.233-3.1 C313.433,343.517,309.715,339.901,304.228,337.886z"
                      ></path>{" "}
                      <path
                        fill="#E8C7AF"
                        d="M241.998,377.28c-6.913-2.653-13.476-2.305-16.8,6.358c-0.149,0.397-0.848,3.03-0.981,3.449 c-2.78,8.672,1.007,14.949,7.603,17.479c6.411,2.462,13.095,0.861,17.027-7.214c0.31-0.626,1.139-3.481,1.378-4.105 C253.551,384.584,248.908,379.934,241.998,377.28z"
                      ></path>{" "}
                      <path
                        fill="#F7F3F0"
                        d="M241.543,378.271c-6.603-2.65-12.919-2.414-16.242,5.864c-0.153,0.379-2.027,6.296-2.162,6.696 c-2.796,8.295-2.952,18.113,5.251,21.407c8.198,3.295,14.376-3.47,18.277-11.174c0.305-0.597,2.31-6.723,2.551-7.321 C252.542,385.464,248.147,380.926,241.543,378.271z"
                      ></path>{" "}
                      <path
                        fill="#EFE4DC"
                        d="M241.962,378.497c-6.604-2.651-12.919-2.414-16.242,5.864c-0.153,0.379-1.096,2.701-1.229,3.102 c-2.799,8.294,0.751,14.385,7.055,16.917c6.126,2.46,12.572,1.021,16.475-6.684c0.304-0.598,1.374-3.129,1.615-3.727 C252.961,385.69,248.566,381.152,241.962,378.497z"
                      ></path>{" "}
                      <path
                        fill="#E8C7AF"
                        d="M190.459,384.026c-6.721-3.107-13.293-3.197-17.186,5.227c-0.176,0.387-1.047,2.967-1.21,3.376 c-3.35,8.468,0.011,14.983,6.424,17.947c6.233,2.883,13.009,1.73,17.47-6.065c0.351-0.604,1.367-3.398,1.647-4.004 C201.499,392.082,197.178,387.134,190.459,384.026z"
                      ></path>{" "}
                      <path
                        fill="#F7F3F0"
                        d="M189.938,384.984c-6.412-3.083-12.729-3.268-16.597,4.771c-0.178,0.368-2.44,6.147-2.603,6.537 c-3.341,8.09-4.149,17.876,3.816,21.708c7.96,3.833,14.574-2.505,18.979-9.933c0.344-0.575,2.752-6.555,3.032-7.136 C200.435,392.893,196.351,388.072,189.938,384.984z"
                      ></path>{" "}
                      <path
                        fill="#EFE4DC"
                        d="M190.342,385.237c-6.413-3.083-12.729-3.268-16.596,4.771c-0.179,0.368-1.273,2.622-1.433,3.013 c-3.345,8.09-0.207,14.402,5.914,17.349c5.948,2.862,12.477,1.854,16.882-5.573c0.344-0.577,1.579-3.031,1.86-3.611 C200.838,393.147,196.755,388.326,190.342,385.237z"
                      ></path>{" "}
                      <path
                        fill="#E8C7AF"
                        d="M157.792,342.693c-6.721-3.107-13.293-3.197-17.186,5.227c-0.176,0.387-1.047,2.967-1.21,3.376 c-3.35,8.468,0.011,14.983,6.424,17.947c6.233,2.883,13.009,1.73,17.47-6.065c0.351-0.604,1.367-3.398,1.647-4.004 C168.832,350.749,164.511,345.801,157.792,342.693z"
                      ></path>{" "}
                      <path
                        fill="#F7F3F0"
                        d="M157.271,343.651c-6.412-3.083-12.729-3.268-16.597,4.771c-0.178,0.368-2.44,6.147-2.603,6.537 c-3.341,8.09-4.149,17.876,3.816,21.708c7.96,3.833,14.574-2.505,18.979-9.933c0.344-0.575,2.752-6.555,3.032-7.136 C167.768,351.56,163.684,346.739,157.271,343.651z"
                      ></path>{" "}
                      <path
                        fill="#EFE4DC"
                        d="M157.675,343.904c-6.413-3.083-12.729-3.268-16.596,4.771c-0.179,0.368-1.273,2.622-1.433,3.013 c-3.345,8.09-0.207,14.402,5.914,17.349c5.948,2.862,12.477,1.854,16.882-5.573c0.344-0.577,1.579-3.031,1.86-3.611 C168.171,351.814,164.088,346.993,157.675,343.904z"
                      ></path>{" "}
                      <path
                        fill="#CEA98D"
                        d="M226.888,148.489c0,0-9.374,13.749-14.194,22.318c-4.771,8.481-14.952,35.752-14.952,35.752 s11.206-24.169,17.451-34.413c6.205-10.177,13.837-21.157,13.837-21.157L226.888,148.489z"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">Manicure and Pedicure</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 496.159 496.159"
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#7671ff"
                        d="M248.083,0.003C111.071,0.003,0,111.063,0,248.085c0,137.001,111.07,248.07,248.083,248.07 c137.006,0,248.076-111.069,248.076-248.07C496.159,111.062,385.089,0.003,248.083,0.003z"
                      ></path>{" "}
                      <g>
                        {" "}
                        <polygon
                          fill="#E2BB9A"
                          points="286.327,351.206 209.83,351.206 196.463,430.701 298.694,430.701 "
                        ></polygon>{" "}
                        <path
                          fill="#E2BB9A"
                          d="M393.483,408.079c0,0-71.682-16.355-144.531-16.355c-72.85,0-143.279,16.355-143.279,16.355 c-12.827,0-24.078,7.996-30.449,17.917c44.646,43.381,105.552,70.118,172.712,70.157c0.265,0,0.528-0.005,0.793-0.006 c67.864-0.173,129.318-27.598,174.008-71.908C416.209,415.148,405.544,408.079,393.483,408.079z"
                        ></path>{" "}
                        <ellipse
                          fill="#E2BB9A"
                          cx="341.38"
                          cy="251.459"
                          rx="9"
                          ry="21.749"
                        ></ellipse>{" "}
                        <ellipse
                          fill="#E2BB9A"
                          cx="154.39"
                          cy="251.459"
                          rx="9"
                          ry="21.749"
                        ></ellipse>{" "}
                      </g>{" "}
                      <path
                        fill="#E9C29C"
                        d="M248.322,108.588c-55.328,0-100.183,27.276-100.183,100.491c0,32.833,8.072,88.486,23.934,110.921 c11.368,16.079,47.572,53.795,76.249,53.795s64.329-34.383,76.839-54.716c14.292-23.229,23.345-77.6,23.345-110 C348.506,135.864,303.657,108.588,248.322,108.588z"
                      ></path>{" "}
                      <g>
                        {" "}
                        <path
                          fill="#917751"
                          d="M230.694,211.155c0,0-12.757-0.781-17.378-1.057s-12.289,0.058-18.622,1.724s-19,12.333-19,12.333 s14.333-6.583,20-7.25s11.667-0.667,17.667,0s20,3.917,20,3.917L230.694,211.155z"
                        ></path>{" "}
                        <path
                          fill="#917751"
                          d="M299.028,211.822c-6.333-1.667-14-2-18.622-1.724s-17.378,1.057-17.378,1.057l-2.667,9.667 c0,0,14-3.25,20-3.917s12-0.667,17.667,0s20,7.25,20,7.25S305.361,213.489,299.028,211.822z"
                        ></path>{" "}
                      </g>{" "}
                      <path
                        fill="#C9936B"
                        d="M248.322,108.588c-55.328,0-100.183,27.276-100.183,100.491c0,32.833,8.072,88.486,23.934,110.921 c11.368,16.079,47.572,53.795,76.249,53.795s64.329-34.383,76.839-54.716c14.292-23.229,23.345-77.6,23.345-110 C348.506,135.864,303.657,108.588,248.322,108.588z M169.542,224.462c0-8.836,26.495-20.667,40.878-20.667 c36.122,0,31.143,26.333,30.125,32.333c-1.46,8.603-15.74,22-30.125,22C196.037,258.129,169.542,233.299,169.542,224.462z M248.368,343.391c-18.895,0-34.212-8.592-34.212-19.193c0-6.946,6.578-11.297,16.43-14.667c5.182-1.772,11.27-0.12,17.782-0.12 c6.002,0,11.644-1.805,16.548-0.282c10.532,3.272,17.664,7.836,17.664,15.068C282.58,334.798,267.262,343.391,248.368,343.391z M284.535,258.129c-14.384,0-28.665-13.397-30.125-22c-1.018-6-5.997-32.333,30.125-32.333c14.384,0,40.878,11.83,40.878,20.667 C325.413,233.299,298.919,258.129,284.535,258.129z"
                      ></path>{" "}
                      <path
                        fill="#666666"
                        d="M211.643,225.871c-12.251-0.847-22.937,9.384-22.937,9.384c-0.174,2.52,9.176,11.604,21.427,12.452 c12.251,0.847,22.937-9.384,22.937-9.384S223.894,226.718,211.643,225.871z"
                      ></path>{" "}
                      <path
                        fill="#F7F1ED"
                        d="M211.434,228.892c-11.59-0.802-21.638,7.955-21.638,7.955c-0.15,2.172,8.747,10.057,20.337,10.859 c11.59,0.801,21.638-7.956,21.638-7.956S223.025,229.693,211.434,228.892z"
                      ></path>{" "}
                      <circle
                        fill="#5B5B5B"
                        cx="210.77"
                        cy="238.539"
                        r="7.782"
                      ></circle>{" "}
                      <circle
                        fill="#333333"
                        cx="210.77"
                        cy="238.539"
                        r="5.507"
                      ></circle>{" "}
                      <path
                        fill="#666666"
                        d="M283.675,225.871c-12.251,0.848-21.427,12.452-21.427,12.452s10.686,10.23,22.937,9.384 c12.251-0.848,21.601-9.932,21.427-12.452C306.612,235.254,295.926,225.023,283.675,225.871z"
                      ></path>{" "}
                      <path
                        fill="#F7F1ED"
                        d="M283.884,228.892c-11.591,0.801-20.337,10.858-20.337,10.858s10.048,8.757,21.639,7.956 c11.591-0.802,20.487-8.687,20.337-10.859C305.522,236.847,295.475,228.09,283.884,228.892z"
                      ></path>{" "}
                      <circle
                        fill="#5B5B5B"
                        cx="284.54"
                        cy="238.179"
                        r="7.782"
                      ></circle>{" "}
                      <circle
                        fill="#333333"
                        cx="284.53"
                        cy="238.179"
                        r="5.506"
                      ></circle>{" "}
                      <path
                        fill="#E8CEA7"
                        d="M156.08,116.079c-30.497,47.701-18.616,110.635-11,132.5c2.124,6.096,6,2,6,2s52.796-36.758,98-83.75 V55.794C249.08,55.794,185.753,69.667,156.08,116.079z"
                      ></path>{" "}
                      <path
                        fill="#E2C796"
                        d="M336.08,107.079c-35.652-41.994-70.029-51.573-89.753-59.107 c-13.805-5.273-13.499,30.249-11.999,54.248c1.598,25.571,14.752,64.609,14.752,64.609c38.5,51.25,101.5,77.25,101.5,77.25 S371.733,149.073,336.08,107.079z"
                      ></path>{" "}
                      <polygon
                        fill="#FFFFFF"
                        points="248.437,320.336 221.043,321.389 248.058,327.946 275.831,321.389 "
                      ></polygon>{" "}
                      <path
                        fill="#CE8C78"
                        d="M248.437,325.283c-9.131,0-28.442-3.704-28.442-3.704s9.8,16.64,28.443,16.64 s28.055-16.64,28.055-16.64S257.569,325.283,248.437,325.283z"
                      ></path>{" "}
                      <path
                        fill="#DB9A83"
                        d="M262.134,314.439c-6.85,0-13.696,1.712-13.696,1.712s-6.849-1.712-13.697-1.712 c-6.849,0-14.746,7.14-14.746,7.14s17.789,1.111,28.443,1.111s28.055-1.111,28.055-1.111S268.983,314.439,262.134,314.439z"
                      ></path>{" "}
                      <path
                        fill="#E8B1A0"
                        d="M224.237,320.736l17.275-3.394C230.078,312.369,224.237,320.736,224.237,320.736z"
                      ></path>{" "}
                      <g>
                        {" "}
                        <path
                          fill="#B5805D"
                          d="M259.91,280.313l-5.505-31.932l3.303,33.033c0,0,9.634,6.882,1.927,14.314 C259.635,295.728,273.673,292.975,259.91,280.313z"
                        ></path>{" "}
                        <path
                          fill="#B5805D"
                          d="M236.503,280.313c-13.763,12.662,0.275,15.415,0.275,15.415c-7.708-7.432,1.927-14.314,1.927-14.314 l3.304-33.033L236.503,280.313z"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">Facial Treatments</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
      <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Read trusted reviews from our customers
            </h2>

            <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
              {reviews.map(({ customerName, starRating, comment }, index) => (
                <div key={index} className="mb-8 sm:break-inside-avoid">
                  <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                    <div className="flex items-center gap-4">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        className="size-14 rounded-full object-cover"
                      />

                      <div>
                        <div className="flex justify-center gap-0.5 text-green-500">
                          {Array.from({ length: starRating }, (_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        <p className="mt-0.5 text-lg font-medium text-gray-900">
                          {customerName}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-700">{comment}</p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Customer Reviews
          </h2>

          <div className="mt-10"></div>

          <form
            onSubmit={handleReviewSubmit}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div>
              <label
                htmlFor="customerName"
                className="block text-sm font-medium text-gray-700 sr-only"
              >
                Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  required
                  placeholder="Enter Name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="starRating"
                className="block text-sm font-medium text-gray-700 sr-only"
              >
                Star Rating
              </label>

              <div className="relative">
                <select
                  id="starRating"
                  value={starRating}
                  onChange={(e) => setStarRating(parseInt(e.target.value))}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                >
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700 sr-only"
              >
                Comment
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
      ;
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <span className="text-2xl">SEA salon</span>
              </div>

              <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Dribbble</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">About Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Company History
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Meet the Team
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">
                  Our Services
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Haircuts and Styling{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Manicure and Pedicure{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Facial Treatments{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">
                  Helpful Links
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      FAQs{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Support{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-gray-700">
                        Thomas: 08123456789
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-gray-700">
                        Sekar: 08164829372
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <span className="block sm:inline">All rights reserved.</span>

                <a
                  className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                  href="#"
                >
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                  href="#"
                >
                  Privacy Policy
                </a>
              </p>

              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy; 2024 SEA Salon
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
