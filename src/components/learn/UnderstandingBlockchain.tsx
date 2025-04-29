
const UnderstandingBlockchain = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-6">Understanding Blockchain</h2>
            <p className="text-gray-600 mb-4">
              Blockchain is the underlying technology behind cryptocurrencies. It's a distributed digital ledger that records 
              transactions across many computers so that any involved record cannot be altered retroactively.
            </p>
            <p className="text-gray-600 mb-6">
              Think of blockchain as a chain of blocks, where each block contains a list of transactions. Once a block is completed, 
              it's added to the chain, creating a permanent and unalterable record.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-tykoo-darkBlue mb-2">Security</h3>
                <p className="text-sm text-gray-600">Each transaction is encrypted and linked to the previous transaction, making the blockchain highly secure against fraud and hacking.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-tykoo-darkBlue mb-2">Consensus</h3>
                <p className="text-sm text-gray-600">Blockchain networks use consensus mechanisms like Proof of Work or Proof of Stake to validate transactions without a central authority.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
              alt="Blockchain technology visualization" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingBlockchain;
