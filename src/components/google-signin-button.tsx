'use client'
import { signIn } from 'next-auth/react'

export default function GoogleSignInButton() {
  return (
    <button
      type="button"
      className="btn btn-outline rounded-full w-48 mx-auto"
      onClick={() => signIn('google', { callbackUrl: '/', redirect: true })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 47 16"
        height="18"
      >
        <path
          fill="#FF302F"
          d="m45.617 9.432 1.308.872c-.424.626-1.44 1.699-3.195 1.699-2.18 0-3.804-1.687-3.804-3.833 0-2.283 1.64-3.832 3.62-3.832 1.99 0 2.966 1.583 3.282 2.438l.172.436-5.13 2.123c.391.768 1 1.159 1.86 1.159.86 0 1.457-.425 1.887-1.062ZM41.596 8.05l3.425-1.423c-.19-.476-.752-.815-1.423-.815-.855 0-2.043.757-2.002 2.238Z"
        />
        <path fill="#20B15A" d="M37.453.43h1.652v11.223h-1.652V.43Z" />
        <path
          fill="#3686F7"
          d="M34.848 4.636h1.595v6.816c0 2.828-1.67 3.993-3.643 3.993-1.859 0-2.977-1.25-3.396-2.266l1.463-.609c.264.626.9 1.366 1.933 1.366 1.268 0 2.048-.786 2.048-2.255v-.55h-.057c-.379.458-1.102.871-2.02.871-1.916 0-3.672-1.67-3.672-3.82 0-2.164 1.756-3.85 3.673-3.85.912 0 1.64.407 2.019.855h.057v-.551Zm.115 3.546c0-1.355-.9-2.341-2.048-2.341-1.16 0-2.134.986-2.134 2.34 0 1.337.975 2.307 2.134 2.307 1.147.006 2.048-.97 2.048-2.306Z"
        />
        <path
          fill="#FF302F"
          d="M20.029 8.153c0 2.209-1.721 3.832-3.833 3.832-2.11 0-3.832-1.629-3.832-3.832 0-2.22 1.721-3.838 3.832-3.838 2.112 0 3.833 1.617 3.833 3.838Zm-1.675 0c0-1.377-.999-2.324-2.158-2.324-1.159 0-2.157.947-2.157 2.324 0 1.365.998 2.323 2.157 2.323 1.16 0 2.158-.958 2.158-2.323Z"
        />
        <path
          fill="#FFBA40"
          d="M28.4 8.17c0 2.209-1.722 3.832-3.833 3.832s-3.832-1.623-3.832-3.832c0-2.22 1.72-3.832 3.832-3.832 2.111 0 3.833 1.606 3.833 3.832Zm-1.681 0c0-1.377-.999-2.324-2.158-2.324-1.159 0-2.157.947-2.157 2.324 0 1.365.998 2.324 2.157 2.324 1.165 0 2.157-.964 2.157-2.324Z"
        />
        <path
          fill="#3686F7"
          d="M6.064 10.322c-2.404 0-4.285-1.94-4.285-4.344 0-2.404 1.881-4.343 4.285-4.343 1.297 0 2.244.51 2.944 1.165l1.153-1.153C9.185.712 7.883 0 6.064 0 2.771 0 0 2.685 0 5.978c0 3.294 2.771 5.979 6.064 5.979 1.779 0 3.121-.586 4.171-1.676 1.079-1.078 1.412-2.593 1.412-3.82 0-.385-.046-.781-.098-1.074H6.064v1.595h3.907c-.114.999-.43 1.681-.895 2.146-.562.568-1.451 1.194-3.012 1.194Z"
        />
      </svg>
    </button>
  )
}
