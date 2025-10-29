interface ClaimStepIndicatorProps {
  currentStep: number;
}

const steps = [
  { number: 1, label: 'Verify Business' },
  { number: 2, label: 'Add Details' },
  { number: 3, label: 'Choose Plan' },
  { number: 4, label: 'Complete' },
];

export const ClaimStepIndicator = ({ currentStep }: ClaimStepIndicatorProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                  step.number <= currentStep
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {step.number}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  step.number <= currentStep
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 transition-colors ${
                  step.number < currentStep ? 'bg-secondary' : 'bg-muted'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
