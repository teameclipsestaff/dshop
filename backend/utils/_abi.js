module.exports = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "offers",
    outputs: [
      {
        name: "value",
        type: "uint256"
      },
      {
        name: "commission",
        type: "uint256"
      },
      {
        name: "refund",
        type: "uint256"
      },
      {
        name: "currency",
        type: "address"
      },
      {
        name: "buyer",
        type: "address"
      },
      {
        name: "affiliate",
        type: "address"
      },
      {
        name: "arbitrator",
        type: "address"
      },
      {
        name: "finalizes",
        type: "uint256"
      },
      {
        name: "status",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "tokenAddr",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "allowedAffiliates",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "listings",
    outputs: [
      {
        name: "seller",
        type: "address"
      },
      {
        name: "deposit",
        type: "uint256"
      },
      {
        name: "depositManager",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "_tokenAddr",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "MarketplaceData",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "AffiliateAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "AffiliateRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "ListingCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "ListingUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "ListingWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "ListingArbitrated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "ListingData",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: true,
        name: "offerID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "OfferCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: true,
        name: "offerID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "OfferAccepted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: true,
        name: "offerID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "OfferFinalized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: true,
        name: "offerID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "OfferWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: true,
        name: "offerID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "OfferFundsAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: true,
        name: "offerID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "OfferDisputed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: true,
        name: "offerID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "ruling",
        type: "uint256"
      }
    ],
    name: "OfferRuling",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "party",
        type: "address"
      },
      {
        indexed: true,
        name: "listingID",
        type: "uint256"
      },
      {
        indexed: true,
        name: "offerID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "OfferData",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      }
    ],
    name: "OwnershipRenounced",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    constant: true,
    inputs: [],
    name: "totalListings",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      }
    ],
    name: "totalOffers",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_ipfsHash",
        type: "bytes32"
      },
      {
        name: "_deposit",
        type: "uint256"
      },
      {
        name: "_depositManager",
        type: "address"
      }
    ],
    name: "createListing",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_seller",
        type: "address"
      },
      {
        name: "_ipfsHash",
        type: "bytes32"
      },
      {
        name: "_deposit",
        type: "uint256"
      },
      {
        name: "_depositManager",
        type: "address"
      }
    ],
    name: "createListingWithSender",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "_ipfsHash",
        type: "bytes32"
      },
      {
        name: "_additionalDeposit",
        type: "uint256"
      }
    ],
    name: "updateListing",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_seller",
        type: "address"
      },
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "_ipfsHash",
        type: "bytes32"
      },
      {
        name: "_additionalDeposit",
        type: "uint256"
      }
    ],
    name: "updateListingWithSender",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "_target",
        type: "address"
      },
      {
        name: "_ipfsHash",
        type: "bytes32"
      }
    ],
    name: "withdrawListing",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "_ipfsHash",
        type: "bytes32"
      },
      {
        name: "_finalizes",
        type: "uint256"
      },
      {
        name: "_affiliate",
        type: "address"
      },
      {
        name: "_commission",
        type: "uint256"
      },
      {
        name: "_value",
        type: "uint256"
      },
      {
        name: "_currency",
        type: "address"
      },
      {
        name: "_arbitrator",
        type: "address"
      }
    ],
    name: "makeOffer",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "offerID",
        type: "uint256"
      },
      {
        name: "_ipfsHash",
        type: "bytes32"
      }
    ],
    name: "acceptOffer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "offerID",
        type: "uint256"
      },
      {
        name: "_ipfsHash",
        type: "bytes32"
      }
    ],
    name: "withdrawOffer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "offerID",
        type: "uint256"
      },
      {
        name: "_ipfsHash",
        type: "bytes32"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "addFunds",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "offerID",
        type: "uint256"
      },
      {
        name: "_ipfsHash",
        type: "bytes32"
      }
    ],
    name: "finalize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "offerID",
        type: "uint256"
      },
      {
        name: "_ipfsHash",
        type: "bytes32"
      }
    ],
    name: "dispute",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "offerID",
        type: "uint256"
      },
      {
        name: "_ipfsHash",
        type: "bytes32"
      },
      {
        name: "_ruling",
        type: "uint256"
      },
      {
        name: "_refund",
        type: "uint256"
      }
    ],
    name: "executeRuling",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "offerID",
        type: "uint256"
      },
      {
        name: "_refund",
        type: "uint256"
      },
      {
        name: "_ipfsHash",
        type: "bytes32"
      }
    ],
    name: "updateRefund",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "addData",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "addData",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "offerID",
        type: "uint256"
      },
      {
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "addData",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "listingID",
        type: "uint256"
      },
      {
        name: "target",
        type: "address"
      },
      {
        name: "value",
        type: "uint256"
      },
      {
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "sendDeposit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_tokenAddr",
        type: "address"
      }
    ],
    name: "setTokenAddr",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_affiliate",
        type: "address"
      },
      {
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "addAffiliate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_affiliate",
        type: "address"
      },
      {
        name: "ipfsHash",
        type: "bytes32"
      }
    ],
    name: "removeAffiliate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];
