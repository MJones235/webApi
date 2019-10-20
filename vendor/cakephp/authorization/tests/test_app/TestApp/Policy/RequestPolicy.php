<?php
namespace TestApp\Policy;

use Authorization\Policy\RequestPolicyInterface;
use Authorization\Policy\Result;
use Cake\Http\ServerRequest;

/**
 * For testing request based policies
 */
class RequestPolicy implements RequestPolicyInterface
{
    /**
     * Method to check if the request can be accessed
     *
     * @param \Authorization\IdentityInterface|null $identity Identity
     * @param \Cake\Http\ServerRequest $request Request
     * @return bool
     */
    public function canAccess($identity, ServerRequest $request)
    {
        if ($request->getParam('controller') === 'Articles'
            && $request->getParam('action') === 'index'
        ) {
            return true;
        }

        // More checks here

        return false;
    }

    /**
     * Method to check if the request can be accessed
     *
     * @param null|\Authorization\IdentityInterface Identity
     * @param \Cake\Http\ServerRequest $request Request
     * @return \Authorization\Policy\ResultInterface
     */
    public function canEnter($identity, ServerRequest $request)
    {
        if ($request->getParam('controller') === 'Articles'
            && $request->getParam('action') === 'index'
        ) {
            return new Result(true);
        }

        return new Result(false, 'wrong action');
    }
}
